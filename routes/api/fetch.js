var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res, next) {
  const originalUrl = req.query.originalUrl;
  const options = {};
  options.url = originalUrl;
  console.log(originalUrl);

  request.get(options, function (error, response, body) {
    console.log(error)

    console.log('body')
    console.log(body)
    res.send({ body: body });
  });
});

module.exports = router;
