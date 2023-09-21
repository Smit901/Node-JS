const express = require("express");
const router = express.Router();

const { getFriends, addUser } = require("../controller/user");

router.get('/:userId',getFriends)

router.post('/add', addUser)

module.exports = router;