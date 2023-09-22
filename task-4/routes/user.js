const express = require("express");
const router = express.Router();

const { getFriends, addUser } = require("../controller/user");
const asyncRouteHandler = require("../util/asyncRouteHandler");

router.get('/:userId',asyncRouteHandler(getFriends))

router.post('/add', asyncRouteHandler(addUser))

module.exports = router;