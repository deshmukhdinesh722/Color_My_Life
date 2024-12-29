import express from 'express';
import { Router } from 'express';
import { allUserAdddress } from '../controller/admin/AllAddressController.js';


const allAddressRouter=Router()

allAddressRouter.route('/getAllAddress/:userId').get(allUserAdddress)


export default allAddressRouter;



