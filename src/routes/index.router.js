/**
 * index.router.js
 * Router principal de la aplicación.
 *
 * Encargado de importar y delegar las rutas a cada sub-router de la aplicación.
 * Este router se monta en '/' en app.js.
 *
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-09-23
 */

import express from 'express';
const router = express.Router();

/* Requiriendo Todas las Rutas */
import mainRouter from './home.routes.js';
import userRouter from './users.routes.js';

/* Derivando las Rutas */
router.use('/', mainRouter);
router.use('/users', userRouter);

export default router;