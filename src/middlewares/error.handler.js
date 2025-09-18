/**
 * error.handler.js
 * Módulo centralizado de manejo de errores.
 *
 * Contiene middlewares para:
 * - Capturar errores 404 (notFound)
 * - Manejar errores generales de la aplicación (generalError)
 * 
 * Estos middlewares se importan y utilizan en app.js.
 *
 * @author Dante Marcos Delprato
 * @version 1.0
 * @date 2025-09-18
 */

const createError = require('http-errors');

const errorHandler = {
  // Middleware para manejar 404
  // catch 404 and forward to error handler
  notFound: (req, res, next) => {
    next(createError(404));
  },

  // Middleware general de manejo de errores
  generalError: (err, req, res, next) => {
    res.locals.message = err.message;
    res.locals.path = req.path;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('pages/error');
  }
}

module.exports = errorHandler;