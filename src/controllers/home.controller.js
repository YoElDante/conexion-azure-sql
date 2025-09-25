const controller = {
  home: (req, res, next) => {
    res.render('pages/home', {
      title: 'Portal de pagos - Municipalidad de Tinoco',
    });
  },
}

export default controller;
