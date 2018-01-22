var express = require('express');
var router = express.Router();
const projects = require('../lib/projects.json');

router.get('/', (req, res, next) => {
  res.render('projects/index', {projects});
});

router.get('/:id', (req, res, next) => {
  res.render('projects/single', {project: projects[req.params.id]});
});

module.exports = router;
