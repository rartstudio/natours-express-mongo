const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
	name : {
		type: String,
		required: [true, 'A tour must have a name'],
		unique: true,
		trim: true,
	},
	duration : {
		type: Number,
		required: [true,'A tour must have a duration']
	},
	maxGroupSize: {
		type: Number,
		required: [true,'A tour must have a group size']
	},
	difficulty : {
		type: String,
		required: [true, 'A tour must have a difficulty']
	},
	ratingsAverage : {
		type: Number,
		default: 4.5
	},
	ratingsQuantity : {
		type: Number,
		default: 0
	},
	price: {
		type: Number,
		required: [true, 'A tour must have a price']
	},
	priceDiscount: Number,
	summary: {
		type: String,
		//remove a space from left and right of text
		trim: true,
		required: [true, 'A tour must have a description']
	},
	description: {
		type: String,
		trim: true,
	},
	imageCover: {
		type: String,
		required: [true, 'A tour must have a cover image cover']
	},
	//an array with value string
	images: [String],
	createdAt: {
		type: Date,
		default: Date.now(),
		//hide a created at from user
		//select: false
	},
	//start date of tours
	startDates: [Date]
});

//create model base on schema
const Tour = mongoose.model('Tour', tourSchema);

//export as a class
module.exports = Tour;