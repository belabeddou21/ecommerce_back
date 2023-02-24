import express from 'express';
import { login, signup } from '../Controllers/auth.js';
import { deleteUser, getAllUser, getUser, modifyUser, userStat } from '../Controllers/User-Controller.js';
import { verifyTokenAndAdmin, verifyTokenAndAuthorization } from '../Controllers/verifyToken.js';
const router = express.Router();

router.post('/signup',signup);
router.post('/login',login);
router.put("/modify/:id",verifyTokenAndAuthorization,modifyUser);
router.get('/stats',userStat);
router.get("/find/:id",verifyTokenAndAdmin,getUser);
router.get("/",verifyTokenAndAdmin,getAllUser);
router.delete("/delete/:id",verifyTokenAndAuthorization,deleteUser);

export default router;