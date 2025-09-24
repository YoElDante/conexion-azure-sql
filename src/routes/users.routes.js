import express from 'express';
const router = express.Router();

import userController from '../controllers/user.controller.js';

/* GET home page. */
router.get('/', userController.profile)

export default router;