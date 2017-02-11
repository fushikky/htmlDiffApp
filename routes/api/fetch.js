var express = require('express');
// var request = require('request');
var phantom = require('phantom');
// var cheerio = require('cheerio');

var router = express.Router();

router.get('/', function(req, res, next) {
  const originalUrl = req.query.originalUrl;
  const options = {};
  // options.url = originalUrl;
  console.log('originalUrl:' + originalUrl);
  phantom.create()
  .then((instance) => {
      return instance.createPage();
  })
  .then(function(page) {
    console.log('page.open');
    page.open(originalUrl)
    .then(function(status) {
      console.log('status:' + status)
      page.property('content')
      .then(function(content) {
        console.log(content)
        res.send({ body: content });
      });
    });
  })
  .catch(error => {
      console.log(error);
      phInstance.exit();
  });



  // request.get(options, function (error, response, body) {
  //   console.log(error)

  //   console.log('body')
  //   console.log(body)
  //   res.send({ body: body });
  // });
});

module.exports = router;
