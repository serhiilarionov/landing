var express = require('express');
var mongoose = require('mongoose-promised');
var Section = mongoose.model('Section');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Section
    .where('language').equals(req.language)
    .sort({position: 1})
    .findQ()
    .then(function (sections) {
      res.render('index', {
        sections: sections
      });
    })
    .catch(function (err) {
      next(err);
    });
});

module.exports = router;
