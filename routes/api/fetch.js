var express = require('express');
var phantom = require('phantom');

var router = express.Router();

router.get('/', function(req, res, next) {
  const url = req.query.url;
  console.log('url:' + url);
  var phInstance;
  phantom.create()
  .then((instance) => {
    phInstance = instance;
    return instance.createPage();
  })
  .then(function(page) {
    page.open(url)
    .then(function(status) {
      console.log('status:' + status);
      page.property('content')
      .then(function(content) {
        console.log(content.substring(0, 100));
        res.send({ body: content });
        inst.exit();
      });
    });
  })
  .catch(error => {
      console.log(error);
      res.send({ error: error });
      phInstance.exit();
  });
});

module.exports = router;
