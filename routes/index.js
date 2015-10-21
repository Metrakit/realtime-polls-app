var express = require('express');
var router = express.Router();

var pollController = require('../controllers/poll');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/getlist', pollController.list);
router.get('/get/:id', pollController.get);
router.get('/create', pollController.create);
router.get('/vote/:pollid/:choiceid', pollController.vote);

module.exports = router;
