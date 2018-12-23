import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let classSchema = new Schema({
	name: String,
	numberOfStudent: Number,
	isDropOff: Boolean
});

let Class = mongoose.model('Class', classSchema);

export default Class;