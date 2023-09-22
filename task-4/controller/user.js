const Friend = require("../models/friends");
const User = require("../models/users");

exports.getFriends = async (req, res) => {
	
		const userId = req.params.userId;

		const user = await User.findById(userId,'-_id -__v');

		if (!user) {
			return res.status(400).json({ message: 'User not found' });
		}

		const friends = await Friend.find({ user_id: userId }).populate('friend_ids', '-_id name age');

		res.status(200).json({ user, friends: friends[0].friend_ids })
	
}

exports.addUser = async (req, res) => {
		const { name, age, phone_no } = req.body;

		// Create a new user
		const newUser = new User({ name, age, phone_no });

		// Save the user to the database
		await newUser.save();

		res.status(201).json({ message: 'User created successfully', user: newUser })
	
}