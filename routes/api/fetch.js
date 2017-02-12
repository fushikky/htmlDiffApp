var express = require('express');
var phantom = require('phantom');

var router = express.Router();

router.get('/', function(req, res, next) {
  const url = req.query.url;
  const options = {};
  console.log('url:' + url);
  var instance1;
  phantom.create()
  .then((instance) => {
    instance1= instance;
    return instance.createPage();
  })
  .then(function(page) {
    page.open(url)
    .then(function(status) {
      console.log('status:' + status);
      page.property('content')
      .then(function(content) {
        console.log(content);
        res.send({ body: content });
        instance1.exit();
      });
    });
  })
  .catch(error => {
      console.log(error);
      phInstance.exit();
  });
});

module.exports = router;
