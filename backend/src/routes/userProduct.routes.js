import express from 'express';

import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';
import { getAllProductsHome, getFilterProducts, getProductsDetails, getProductsDetailsHome } from '../controller/user/productsControllers.js';

const userRouter=Router();

userRouter.route('/get').get(getFilterProducts)
userRouter.route('/get/:id').get(getProductsDetails)
userRouter.route('/getHomeProducts').get(getAllProductsHome)
userRouter.route('/getProductDetailHome/:id').get(getProductsDetailsHome)





export default userRouter;

