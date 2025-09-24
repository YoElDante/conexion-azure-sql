/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */


export const setGlobals = (req, res, next) => {
  res.locals.muni = 'Tinoco'; // variable global para layouts y vistas
  next();
};