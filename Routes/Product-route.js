import express from 'express';
import { addProduct, deleteProduct, getProducts, updateProduct } from '../Controllers/Product-Controller.js';
import { verifyTokenAndAdmin } from '../Controllers/verifyToken.js';
const router = express.Router();

router.post('/add',verifyTokenAndAdmin,addProduct);
router.get('/find',getProducts)
router.put('/update/:id',verifyTokenAndAdmin,updateProduct);
router.delete('/delete/:id',verifyTokenAndAdmin,deleteProduct);

export default router;