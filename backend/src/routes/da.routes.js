import express from 'express';
import {handleImgUpload,addProduct,fetchProduct,editProduct, deleteProduct} from '../controller/admin/productsController.js';
import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';

import { addNewSMPH, deleteSMPH, fetchSMPH } from '../controller/admin/SMPHController.js';
import { addNewDA, deleteDA, fetchDA } from '../controller/admin/DAController.js';

const adminDaRouter=Router();

adminDaRouter.route('/da-add').post( addNewDA)
adminDaRouter.route('/da-fetch').get( fetchDA)
adminDaRouter.route('/da-delete/:id').delete(deleteDA)


export default adminDaRouter;
