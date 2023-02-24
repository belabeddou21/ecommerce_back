import Order from "../Models/Order-Model.js";

// create order
export const addOrder=async(req,res)=>{
    const newOrder = new Order(req.body);
    try {
    const savedOrder=await newOrder.save();
    return res.status(200).json({savedOrder});
    } catch (error) {
    res.status(500).json({error});
    }
}
// update order 
export const updateOrder=async(req,res)=>{
    try {
     const updatedOrder=await Order.findByIdAndUpdate(
        req.params.id,
        { $set : req.body},
        {new : true }
        );
        res.status(200).json({updatedOrder});
    } catch (error) {
     res.status(500).json({error});
    }
}
// delete order 
export const deleteOrder=async(req,res)=>{
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({message : "order has been deleted"});
    } catch (error) {
        res.status(500).json({error});
    }
   

}
//get user orders 
export const getUserOrders =async(req,res)=>{
    try {
     const orders = await Order.find({userId : req.params.userId});
     return res.status(200).json({orders});
    } catch (error) {
       return res.status(500).json({error}); 
    }
}
// get all orders 
export const getAllOrders =async(req,res)=>{
    try {
        const  allOrders=await Order.find();
        return res.status(200).json({allOrders});
    } catch (error) {
        return res.status(500).json({error}); 
    }
}
// orders stat (get monthly income)
export const monthlyIncome = async(req,res)=>{
    const date=new Date();
    const lastMonth=new Date(date.setMonth(date.getMonth()-1));
    const previousMonth=new Date(new Date().setMonth(lastMonth.getMonth()-1));  

 try {
  const monthly_Income=await Order.aggregate([
   { $match : {createdAt : { $gte : previousMonth}}},
   {$project : {
    Range :{$month:"$createdAt"},
    sales : "$amount"
   }},
   {$group :{
    _id : "$Range",
    total : {$sum : "$sales"}

   }}
  ]
  );
  return res.status(200).json({monthly_Income})
 } catch (error) {
  return res.status(200).json({error});
 }
}