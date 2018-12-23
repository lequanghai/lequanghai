import { Router } from 'express';
import ClassController from '../controllers/class.controller';
const router = new Router();

router.get('/classes', ClassController.getAll);
router.post('/classes', ClassController.addClass);
// Update, delete, get by _id


export default router;