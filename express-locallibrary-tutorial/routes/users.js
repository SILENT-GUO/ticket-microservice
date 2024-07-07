var express = require('express');
var router = express.Router();

/* GET users listing. */
// add to the routes in app.js
router.get('', function(req, res, next) {
  res.send('respond with a resource');
});



module.exports = router;
