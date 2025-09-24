/**
 * app.js
 * Archivo principal de configuración de la aplicación Express.
 *
 * Configura:
 * - Motor de vistas
 * - Middlewares globales
 * - Sistema de rutas
 * - Manejo de errores
 *
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-09-18
 */

// ------- IMPORTANDO MODULOS -------

import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import expressLayouts from 'express-ejs-layouts'

import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ------- CONFIGURACIÓN DEL MOTOR DE VISTAS -------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/main'); // Layout principal


// ------- MIDDLEWARES GLOBALES -------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

import { setGlobals } from './middlewares/locals.middleware.js';
app.use(setGlobals);


// ------- INGRESO A SISTEMA DE RUTAS -------
import indexRouter from './routes/index.router.js';
app.use('/', indexRouter);

// ------- MANEJO DE RUTAS ERRONEAS -------
import errorHandler from './middlewares/error.handler.js';
app.use(errorHandler.notFound);
app.use(errorHandler.generalError);

export default app;