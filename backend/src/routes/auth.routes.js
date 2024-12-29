import Router from 'express';
import express from 'express';
import { AuthMiddleware, LoginUser, LogoutUser, registerUser } from '../controller/user-auth/authController.js';

const router=Router()

router.route('/register').post(registerUser)
router.route('/login').post(LoginUser)
router.route('/logout').post(LogoutUser)
router.route('/check-auth').get(AuthMiddleware, (req, res) => {
    try {
        const user = req.user; // Decoded token user data
        res.status(200).json({
            success: true,
            message: 'Authenticated user',
            user,
        });
    } catch (error) {
        res.status(401).json({
            success: false,
            message: 'Unauthorized',
        });
    }
});




export default router