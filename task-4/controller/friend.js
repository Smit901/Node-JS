const Friend = require("../models/friends");
const User = require("../models/users");

exports.addFriend =
	async (req, res) => {

		const { userId, friendId } = req.body;

		const user = await User.findById(userId);
		const friend = await User.findById(friendId);

		if (!user || !friend) {
			return res.status(404).json({ error: 'User or friend not found' });
		}

		if (userId === friendId) {
			return res.status(400).json({ error: 'You cannot add yourself as a friend' });
		}

		const friend1 = await Friend.findOne({ user_id: userId })

		if (friend1) {
			if (friend1.friend_ids.includes(friendId)) {
				throw new Error('The friend already is a friend.')
			} else {
				friend1.friend_ids.push(friendId);
				await friend1.save();
			}
		} else {
			const newFriendship = new Friend({ user_id: userId, friend_ids: [friendId] });
			await newFriendship.save();
		}

		res.status(201).json({ message: 'Friend added successfully' });
	}


