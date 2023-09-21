const express = require("express");
const router = express.Router();

const User = require("../models/users");
const Friend = require("../models/friends");

router.get('/', (req, res) => {
	res.send({ message: "friends routes" })
})

router.post('/add', async (req, res) => {
	try {
		const { userId, friendId } = req.body;

		const user = await User.findById(userId);
		const friend = await User.findById(friendId);

		if (!user || !friend) {
			return res.status(404).json({ error: 'User or friend not found' });
		}

		if (userId === friendId) {
			return res.status(400).json({ error: 'You cannot add yourself as a friend' });
		}

		const newFriendship = new Friend({ user_id: userId, friend_id: friendId });
		await newFriendship.save();

		res.status(201).json({ message: 'Friend added successfully' });
	} catch (error) {
		console.error('Error adding friend:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
})

module.exports = router;