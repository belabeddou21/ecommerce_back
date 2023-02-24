import express from 'express';
import { addCarte, deleteCarte, findAllCartes, getCarte, updateCarte } from '../Controllers/Carte-Controller.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../Controllers/verifyToken.js';

const router = express.Router();

router.post("/",verifyTokenAndAuthorization,addCarte);
router.get('/find/:userId',verifyTokenAndAuthorization,getCarte);
router.put("/update/:id",verifyTokenAndAuthorization,updateCarte);
router.delete("/delete/:id",verifyTokenAndAuthorization,deleteCarte);
router.get('/findAll',verifyTokenAndAdmin,findAllCartes);


export default router;