const mongoose = require('mongoose');

const friendsSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	friend_id:{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
})

const Friend = mongoose.model('Friend',friendsSchema);

module.exports = Friend;