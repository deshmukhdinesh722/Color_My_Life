import express from 'express';
import {handleImgUpload,addProduct,fetchProduct,editProduct, deleteProduct} from '../controller/admin/productsController.js';
import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';

import { addNewGd, deleteGd, fetchGd } from '../controller/admin/GDController.js';

const adminGdRouter=Router();

adminGdRouter.route('/gd-add').post( addNewGd)
adminGdRouter.route('/gd-fetch').get( fetchGd)
adminGdRouter.route('/gd-delete/:id').delete(deleteGd)


export default adminGdRouter;
