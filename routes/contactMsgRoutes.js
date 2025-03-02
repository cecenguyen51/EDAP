import { Router } from 'express';
import {validateContactForm, handleValidationErrors} from '../middlewares/validationMiddleware.js';
import * as contactMsgController from '../controllers/contactMsgController.js';

const router = Router();

// dont forget to add the validation middleware
router.post('/', validateContactForm, handleValidationErrors('/contact') ,contactMsgController.saveContactMessage);
router.post('/reply-message/:messageID', contactMsgController.replyToMessage);

export default router;