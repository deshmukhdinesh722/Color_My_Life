import express from 'express';
import { Router } from 'express';
import { addToCart, addToCartA, deleteCartItem, fetchCart, updateCartQty } from '../controller/user/cartController.js';
import { fetchAllCartAdmin } from '../controller/admin/AllOrederControllers.js';

const cartRouter=Router()

cartRouter.route('/addCart').post(addToCart)
cartRouter.route('/get/:userId/:userName').get(fetchCart)
cartRouter.route('/updateCart').put(updateCartQty)
cartRouter.route('/:userId/:productId/:userName').delete(deleteCartItem)
cartRouter.route('/addCartA').post(addToCartA)



export default cartRouter;



