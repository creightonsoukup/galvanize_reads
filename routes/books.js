var express = require('express');
var router = express.Router();
var knex = require('../knex')

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex('book').select().then(function(books) {
    res.render("list_books", {books:books})
  });
});

module.exports = router;
