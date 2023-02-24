import Product from '../Models/Product-Model.js';
//create product 
export const addProduct=async(req,res)=>{
    const newProduct=new Product(req.body);
    try {
    const savedProduct = await newProduct.save();
    return res.status(200)
    .json({savedProduct});
    } catch (error) {
    return res.status(500).json(error);
    }
}
//find product
export const getProducts  =async(req,res)=>{
    const qNew = req.query.new;
    const qCategorie = req.query.category;
    try {
    let products;
    if(qNew){
    products=await Product.find().sort({ createdAt :-1}).limit(5);
    }else if(qCategorie){
        products =await Product.find({
            categories :{
                $in :[qCategorie],
            },
        }
        )
    }else{
        products=await Product.find();
    }
    return  res.status(200).json({products});
    } catch (error) {
      return  res.status(200).json({error});
    }

}
// update product 
export const updateProduct=async(req,res)=>{
    try {
        const updatedProduct=await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set : req.body,
            },
            {new : true}
        );
        return res.status(200).json({updatedProduct});
    } catch (error) {
        return res.status(500).json(error);   
    }
}

// delete product 
export const deleteProduct=async(req,res)=>{
    try {
        const deletedProduct=
        await Product.findByIdAndDelete(req.params.id)
        return res.status(200)
          .json({message : "product haas been deleted successfully"});
    } catch (error) {
        return res.status(500).json(error);   
    }
}
