import Carte from '../Models/Carte-Model.js';
//create create 
export const addCarte=async(req,res)=>{
    const newCarte=new Carte(req.body);
    try {
    const savedCarte = await newCarte.save();
    return res.status(200)
    .json({savedCarte});
    } catch (error) {
    return res.status(500).json(error);
    }
}
//find user cart
export const getCarte=async(req,res)=>{
    try {
        const Cart = await Carte.findOne({userId :req.params.userId});
        return  res.status(200).json({Cart});
    } catch (error) {
      return  res.status(200).json({error});
    }

}
// update product 
export const updateCarte=async(req,res)=>{
    try {
        const updatedCarte=await Carte.findByIdAndUpdate(
            req.params.id,
            {
                $set : req.body,
            },
            {new : true}
        );
        return res.status(200).json({updatedCarte});
    } catch (error) {
        return res.status(500).json(error);   
    }
}

// delete product 
export const deleteCarte=async(req,res)=>{
    try {
        await Carte.findByIdAndDelete(req.params.id)
        return res.status(200)
          .json({message : "carte haas been deleted successfully"});
    } catch (error) {
        return res.status(500).json(error);   
    }
}
// get all Cartes 
export const findAllCartes=async(req,res)=>{
    try {
    const cartes=await Carte.find();
    return res.status(200).json({cartes});  
    } catch (error) {
     return res.status(500).json(error);
    }
}



/*
// Add a new product to the cart
export const addProductToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await Carte.findByIdAndUpdate(
      req.params.id,
      {
        $push: { products: { productId, quantity } },
      },
      { new: true }
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Delete a product from the cart
export const deleteProductFromCart = async (req, res) => {
  try {
    const { productId } = req.body;
    const cart = await Carte.findByIdAndUpdate(
      req.params.id,
      {
        $pull: { products: { productId } },
      },
      { new: true }
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// Modify the quantity of a product in the cart
export const modifyProductQuantity = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const cart = await Carte.findOneAndUpdate(
      { _id: req.params.id, "products.productId": productId },
      { $set: { "products.$.quantity": quantity } },
      { new: true }
    );
    return res.status(200).json(cart);
  } catch (error) {
    return res.status(500).json(error);
  }
};
*/