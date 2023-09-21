const Friend = require("../models/friends");
const User = require("../models/users");

exports.getFriends = async (req, res) => {
	try {
		const userId = req.params.userId;

		const user = await User.findById(userId);
		console.log(user)

		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const friends = await Friend.find({ user_id: userId }).populate('friend_id', 'name age');

		res.status(200).json({ user, friends })

	} catch (error) {
		console.error('Error finding friends:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
}

exports.addUser = async (req, res) => {
	try {
		const { name, age, phone_no } = req.body;

		// Create a new user
		const newUser = new User({ name, age, phone_no });

		// Save the user to the database
		await newUser.save();

		res.status(201).json({ message: 'User created successfully', user: newUser })

	} catch (err) {
		res.status(201).json({ message: 'server error', err })
	}
}