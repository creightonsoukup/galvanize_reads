var express = require('express');
var router = express.Router();
var passport = require('../passport')

router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    res.redirect('/');
  }
);

router.get('/google', passport.authenticate("google", { scope: ['profile'] }))

module.exports = router
