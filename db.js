const mongoose = require("mongoose");
require('dotenv').config()


const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;
mongoose.connect(DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

var db = mongoose.connection

db.on('connected',() => {
    console.log(`Mongo DB connection successful`);
})

db.on('error',() => {
    console.log(`MongoDB connection failed`);
})

module.exports = db;