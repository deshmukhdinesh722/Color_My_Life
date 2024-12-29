import express from 'express';
import {handleImgUpload,addProduct,fetchProduct,editProduct, deleteProduct} from '../controller/admin/productsController.js';
import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';
import { addNewSMM, deleteSmm, fetchSMM } from '../controller/admin/SMMController.js';

const adminSmmRouter=Router();

adminSmmRouter.route('/smm-add').post( addNewSMM)
adminSmmRouter.route('/smm-fetch').get( fetchSMM)
adminSmmRouter.route('/smm-delete/:id').delete(deleteSmm)


export default adminSmmRouter;
