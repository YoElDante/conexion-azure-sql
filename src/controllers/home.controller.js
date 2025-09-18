const controller = {
  home: (req, res, next) => {
    res.render('pages/home', { title: 'Express' });
  },
}

module.exports = controller;