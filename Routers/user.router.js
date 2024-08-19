import express from 'express';
import { checkUserExists, resetPassword, userLogin, userRegister } from '../Controllers/user.controller.js';

const router=express.Router();


router.post('/register', userRegister)

router.post('/login',userLogin)
router.post('/checkUser', checkUserExists);

router.put("/resetPassword",resetPassword)

export default router;