import express from 'express';
const router = express.Router();

import homeController from '../controllers/home.controller.js';

/* GET home page. */
router.get('/', homeController.home)


export default router;