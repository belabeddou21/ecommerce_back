import express from 'express';
import { addOrder, deleteOrder, getAllOrders, getUserOrders, monthlyIncome, updateOrder } from '../Controllers/Order-Controller.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../Controllers/verifyToken.js';

const router = express.Router();
//create order
router.post("/create",verifyTokenAndAuthorization,addOrder);
// update order 
router.put("/update/:id",verifyTokenAndAdmin,updateOrder);
// delete order 
router.delete('/delete/:id',verifyTokenAndAdmin,deleteOrder);
// get user orders 
router.get('/userOrders/:userId',verifyTokenAndAuthorization,getUserOrders);
// get all orders 
router.get('/allOrders',verifyTokenAndAdmin,getAllOrders);
// stats
   // 1) monthly income
router.get('/monthlyIncome',verifyTokenAndAdmin,monthlyIncome);
export default router;