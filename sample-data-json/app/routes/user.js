var express = require('express');
var router = express.Router();
var User   = require('../models/user');

// Show users
router.get('/', function(req, res, next) {
	User.find({}, function(err, users) {
    res.json(users);
  });
});

// Show specific user
router.get('/:id', function(req, res, next) {
	User.findOne({ id: req.params.id }, function(err, user) {
    res.json(user);
  });
});

// Add user
router.post('/', function(req, res, next) {
	// create new user
  var newbie = new User(req.body);

  // save new user
  newbie.save(function(err) {
    if (err) throw err;

    res.json({ success: true });
  });
});

module.exports = router;
