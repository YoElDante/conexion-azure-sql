var express = require('express');
var router = express.Router();

const userController = require('../controllers/user.controller');

/* GET home page. */
router.get('/', userController.profile)

module.exports = router;