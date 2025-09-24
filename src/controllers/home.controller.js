const controller = {
  home: (req, res, next) => {
    res.render('pages/home', {
      title: 'Portal de pagos - Municipalidad de Tinoco',
      //layout: 'layouts/main',
      muni: 'Tinoco'
    });
  },
}

export default controller;
