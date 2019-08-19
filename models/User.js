const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    photo: String,
    email: String,
    isJessAllow: Number
});

mongoose.model('users', userSchema);
