const express = require("express");
const router = express.Router();

const User = require("../models/users");
const Friend = require("../models/friends");
const { addFriend } = require("../controller/friend");

router.get('/', (req, res) => {
	res.send({ message: "friends routes" })
})

router.post('/add', addFriend)

module.exports = router;