var express = require('express');
var router = express.Router();
const posts = require('../lib/master.json');

router.get('/', function(req, res, next) {
  titleArray = posts.map(x => {
    return {id: x.id, title: x.title};
  });
  titleArray.reverse();
  res.render('blog/blog', {posts: titleArray});
});

router.get('/:id', (req, res, next) => {
  res.render('blog/single', {post: posts[req.params.id]});
});

module.exports = router;
