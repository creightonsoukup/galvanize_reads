var express = require('express');
var router = express.Router();
var passport = require('../passport')

router.get('/google', passport.authenticate("google"))

module.exports = router
