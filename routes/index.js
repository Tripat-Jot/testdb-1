var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json({message: 'Welcome to App'});
  res.send('<p><h2>Welcome to Azure </h2> <br> by Tripatjot Singh</p> <br> <p><a href="/quotes"> Data Extracted from Stored Procedure </a></p>') ;
});

module.exports = router;
