var express = require('express');
var router = express.Router();
var axios = require('axios');
var Post = require('../models/post');

/* GET posts listing. */
router.get('/', function(req, res, next) {
  Post.find({}).exec((err, posts) => {
    axios.get('https://another.blog.example.com/allPosts?api_key=34j422j3j6oqer99qrc6')
      .then(response => {
        const allPosts = posts.concat(response);
        res.json(
          allPosts.map(p => ({ title: p.title, description: p.description }))
        );
      })
  })
});

router.post('/', function(req, res, next) {
  const post = new Post(req.body);
  post.save((err, post) => {
    res.json({ title: p.title, description: p.description});
  })
})

module.exports = router;
