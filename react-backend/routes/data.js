var express = require('express');
var router = express.Router();
var achecker = require('achecker');
var rp = require('request-promise')
var pa11y = require('pa11y');
var test = pa11y({ignore: [
  'notice', 'warning'
]});

/* GET */
router.get('/', function (req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');
  // And insert something like this instead:
});

/* POST */
router.post('/', function (req, res, next) {
  console.log(res.statusCode);

  let achecker_obj,
      pa11y_obj,
      html_obj;

  // Request source HTML
  rp(req.body.url)
    .then(function (htmlString) {
      html_obj = {
        html: htmlString
      }
    })
    .catch(function (err) {
      console.error(err)
    });

  // achecker
  const acheck = new achecker({
    key: 'api-key',
    uri: req.body.url,
    offset: 0,
    guide: 'WCAG2-A'
  }, function (result) {
    achecker_obj = result;

    res.json([Object.assign(html_obj, achecker_obj, a11y_obj)]);
  });

  // pa11y
  test.run(req.body.url, function(error, results) {
    pa11y_obj = {
      pa11y: results
    };
  });

});

module.exports = router;
