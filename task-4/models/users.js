const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 32,	
		required: true,
		uppercase: true, // Convert to uppercase before saving
	},
	age: {
		type: Number,
		min: 1,
		max: 100,
		required: true
	},
	phone_no: {
		type: Number,
		validate: {
			validator: function (v) {
				return /^\d{10}$/.test(v); // Ensure it's a 10-digit numeric value
			},
			message: props => `${props.value} is not a valid phone number!`,
		},
		required: true
	}
})

const User = mongoose.model('User',usersSchema)

module.exports = User

