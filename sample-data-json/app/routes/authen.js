var jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
var express = require('express');
var router = express.Router();

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.post('/', function(req, res) {

	console.log(req.body.user, req.body.password);
	if (req.body.user !== 'user' || req.body.password !== 'password') {
		console.log('fail');
		res.json({ success: false, message: 'Authentication failed.' });
	} else {
		// if user is found and password is right
		// create a token with only our given payload
		// we don't want to pass in the entire user since that has the password
		const payload = {

		};
		jwt.sign(payload, req.app.get('superSecret'), {
			expiresIn: '24h'
		}, function (err, token) {
			// return the information including token as JSON
			res.json({
				success: !err,
				message: 'Enjoy your token!',
				token: token
			});
		});
	}

});

module.exports = router;
