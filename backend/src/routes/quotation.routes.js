import express from 'express';
import { Router } from 'express';
import { addQuotation, deleteQuatation, fetchAllQuatationAdmin, fetchQuatation } from '../controller/admin/QuotationController.js';

const quatationRouter=Router()


quatationRouter.route('/addQ').post(addQuotation)
quatationRouter.route('/getQ/:userId').get(fetchQuatation)
quatationRouter.route('/getAllQ').get(fetchAllQuatationAdmin)
quatationRouter.route('/deleteQ/:quotationId').delete(deleteQuatation)

export default quatationRouter;



