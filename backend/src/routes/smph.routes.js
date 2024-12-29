import express from 'express';
import {handleImgUpload,addProduct,fetchProduct,editProduct, deleteProduct} from '../controller/admin/productsController.js';
import { upload } from '../utils/cloudinary.js';
import { Router } from 'express';

import { addNewSMPH, deleteSMPH, fetchSMPH } from '../controller/admin/SMPHController.js';

const adminSmphRouter=Router();

adminSmphRouter.route('/smph-add').post( addNewSMPH)
adminSmphRouter.route('/smph-fetch').get( fetchSMPH)
adminSmphRouter.route('/smph-delete/:id').delete(deleteSMPH)


export default adminSmphRouter;
