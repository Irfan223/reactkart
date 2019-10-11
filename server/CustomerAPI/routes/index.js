var express = require("express");
var router = express.Router();

var CusLogin = require('../controllers/customerLogin.js');
var CusRegister = require('../controllers/customerRegister.js');
router.route('/CusLogin').post(CusLogin.CustomerLogin);
router.route('/CusRegister').post(CusRegister.CustomerRegister);
//
module.exports = router;
