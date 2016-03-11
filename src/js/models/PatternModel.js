var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Pattern = new Schema({
	name: {
		type: String,
		required: true,
		default: "A new special pattern"
	},
	img: {
		type: String,
		required: true,
		default: 'knit2.png'
	},
	description: {
		type: String,
		required: true,
		default: 'A great new stitch from a knitster with a knack for this.'
	},
	rows: {
		type: Array,
		required: true
					}
});


module.exports = mongoose.model('Pattern', Pattern)
