import express from 'express';
import { Router } from 'express';
import { addAddress, deleteAddress, editAddress, fetchAddress } from '../controller/user/addressController.js';

const addressRouter=Router()

addressRouter.route('/addAddress').post(addAddress)
addressRouter.route('/getAddresss/:userId').get(fetchAddress)
addressRouter.route('/updateAddress/:userId/:addressId').put(editAddress)
addressRouter.route('/deleteAddress/:userId/:addressId').delete(deleteAddress)

export default addressRouter;



