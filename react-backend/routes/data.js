var express = require('express');
var router = express.Router();
var achecker = require('achecker');
var rp = require('request-promise-native');
var pa11y = require('pa11y');
var test = pa11y({
  ignore: [
    'notice', 'warning'
  ]
});

const promiseAcheck = function acheck(res, url) {
  return new Promise((resolve, reject) => {
    const a = new achecker({
      key: '6526bad064713468aae29e344d7662beb17c866e',
      uri: url,
      offset: 0,
      guide: 'WCAG2-A'
    }, function (result) {
      resolve(result);
    });
  })
};

const promiseGetPa11y = function getPa11y(res, url) {
  return new Promise((resolve, reject) => {
    test.run(url, function (error, results) {
      let pa11y_obj = {pa11y: results};
      resolve(pa11y_obj);
    });
  })
};

const promiseGetStatusCode = function getStatusCode(uri) {
  return new Promise((resolve, reject) => {
    rp({uri, resolveWithFullResponse: true})
      .then(function (htmlString) {
        if (htmlString.statusCode === 200) {
          resolve();
        }
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

/* GET */
router.get('/', function (req, res, next) {
  // Comment out this line:
  //res.send('respond with a resource');
  // And insert something like this instead:

});

/* POST */
router.post('/', function (req, res, next) {

  promiseGetStatusCode(req.body.url)
    .then(() => {
      if (req.body.tools.includes('achecker') && req.body.tools.includes('pa11y')) {
        Promise.all([
          promiseGetPa11y(res, req.body.url),
          promiseAcheck(res, req.body.url)
        ])
          .then(response => {
            let [pa11y, summary, results] = response;
            const final_obj = Object.assign(pa11y, summary, results);
            res.json(final_obj)
          })
          .catch(error => {
            console.error(error);
          })
      }

      else if (req.body.tools.includes('achecker')) {
        promiseAcheck(res, req.body.url)
          .then(response => {
            res.json(response);
          })
          .catch(error => {
            console.error(error);
          })
      }

      else if (req.body.tools.includes('pa11y')) {
        promiseGetPa11y(res, req.body.url)
          .then(response => {
            res.json(response);
          })
          .catch(error => {
            console.error(error);
          })
      }
    })
    .catch(error => {
      const statusCode = error.statusCode || 400;
      res.status(statusCode).send({error: error.message});
    });

});

module.exports = router;
