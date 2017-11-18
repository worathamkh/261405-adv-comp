// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({ 
	id: Number,
	name: String, 
	username: String,
	age: Number,
	email: String,
	address: {
		street: String,
		suite: String,
		city: String,
		zipcode: String,
		geo: {
			lat: String,
			lng: String
		},
		phone: String,
		website: String,
		company: {
			name: String,
			catchPhrase: String,
			bs: String
		}
	}
}));
