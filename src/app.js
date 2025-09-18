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
const express = require('express');
const app = express();

const path = require('node:path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// ------- CONFIGURACIÓN DEL MOTOR DE VISTAS -------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// ------- MIDDLEWARES GLOBALES -------
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '../public')));

// ------- INGRESO A SISTEMA DE RUTAS -------
const indexRouter = require('./routes/index.router.js');
app.use('/', indexRouter);

// ------- MANEJO DE RUTAS ERRONEAS -------
const errorHandler = require('./middlewares/error.handler.js');
app.use(errorHandler.notFound);
app.use(errorHandler.generalError);

module.exports = app;