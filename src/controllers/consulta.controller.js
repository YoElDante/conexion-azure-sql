const controller = {
  home: (req, res, next) => {
    res.render('pages/detalle', {
      title: 'Portal de pagos - Detalle de consulta',
    });
  },
}

export default controller;
