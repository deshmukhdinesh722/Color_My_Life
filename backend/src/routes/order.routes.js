import express from 'express';
import { Router } from 'express';
import { capturePayment, createOrder, getAllOrdersByUser, getOrderDetails } from '../controller/user/orderController.js';


const orderRouter=Router()

orderRouter.route('/create').post(createOrder)
orderRouter.route('/capture').post(capturePayment)
orderRouter.route('/list/:userId').get(getAllOrdersByUser)
orderRouter.route('/details/:id').get(getOrderDetails)






export default orderRouter;
