const Friend = require("../models/friends");
const User = require("../models/users");

exports.addFriend = () => {
	async (req, res) => {
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

			const friend1 = await Friend.find({user_id: userId})

			if(!friend1){
				await Friend.create({})
			}

			const newFriendship = new Friend({ user_id: userId, friend_id: friendId });
			await newFriendship.save();

			res.status(201).json({ message: 'Friend added successfully' });
		} catch (error) {
			console.error('Error adding friend:', error);
			res.status(500).json({ error: 'Internal server error' });
		}
	}
}

