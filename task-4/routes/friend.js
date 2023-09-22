const express = require("express");
const router = express.Router();

const { addFriend } = require("../controller/friend");
const asyncRouteHandler = require("../util/asyncRouteHandler");

router.get('/', (req, res) => {
	res.send({ message: "friends routes" })
})

router.post('/add', asyncRouteHandler(addFriend))

module.exports = router;