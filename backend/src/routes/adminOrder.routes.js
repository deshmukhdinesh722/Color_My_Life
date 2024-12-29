import express from 'express';
import { Router } from 'express';
import { fetchAllCartAdmin, fetchAllUsers, orderDetails } from '../controller/admin/AllOrederControllers.js';
import { deleteUserFromCart } from '../controller/user/cartController.js';

const adminOrderRouter=Router()


adminOrderRouter.route('/get').get(fetchAllCartAdmin)
adminOrderRouter.route('/getUsers').get(fetchAllUsers)
adminOrderRouter.route('/getOne/:userId/:userName').get(orderDetails)
adminOrderRouter.route('/deleteUserFromCart/:id').delete(deleteUserFromCart)





export default adminOrderRouter;



