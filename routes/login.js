'use strict';

var express = require('express');
var router = express.Router();
var passport = require('passport');

router.get('/', (req, res, next) => {
  res.render('login', { user: req.user });
});

router.post('/', passport.authenticate('local', {
  failurFlash: true
}));

module.exports = router;
