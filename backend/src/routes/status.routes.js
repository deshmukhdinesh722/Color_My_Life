
import { Router } from 'express';

import { addStatus, deleteStatus, editStatus, fetchStatus } from '../controller/admin/StatusController.js';

const statusRouter=Router();

statusRouter.route('/addStatus/:userId').post( addStatus)
statusRouter.route('/getStatus/:userId').get( fetchStatus)
statusRouter.route('/editStatus/:userId').put( editStatus)
statusRouter.route('/deleteStatus/:id').delete( deleteStatus)





export default statusRouter;
