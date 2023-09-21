const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// routes
const userRoutes = require("./routes/user")
const friendRoutes = require('./routes/friend')

const app = express();

app.use(express.json());

main().catch(err => console.log(err));

app.use('/user', userRoutes);
app.use('/friend', friendRoutes);


async function main() {
	await mongoose.connect(`${process.env.MONGO_URL}`);

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(process.env.PORT, () => {
	console.log(`Server is running on port ${process.env.PORT}`);
})