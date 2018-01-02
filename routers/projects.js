var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('projects/placeholder');
});

module.exports = router;
