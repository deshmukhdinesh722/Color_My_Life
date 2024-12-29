import express from 'express';
import {handleImgUpload,addProduct,fetchProduct,editProduct, deleteProduct} from '../controller/admin/productsController.js';
import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';

const adminRouter=Router();

adminRouter.route('/upload-img').post(upload.single('file'), handleImgUpload)
adminRouter.route('/add').post(addProduct)
adminRouter.route('/fetch').get(fetchProduct)
adminRouter.route('/edit/:id').put(editProduct)
adminRouter.route('/delete/:id').delete(deleteProduct)

export default adminRouter;

