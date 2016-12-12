import express from 'express';
const router = express.Router();
import {
    index,
    notices,
    noticeDetails
} from './controllers';

router.get('/', index);
router.get('/notices/:page?', notices);
router.get('/notices/details/:link', noticeDetails);

export default router;