import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let userSchema = new Schema({
	gender: Boolean,
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    refNames: [String]
});

let User = mongoose.model('User', userSchema);

export default User;