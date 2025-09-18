const controller = {
  profile: (req, res, next) => {
    res.send(` 'users/profile', { title: 'nombre del user' } `);
  },
}

module.exports = controller;