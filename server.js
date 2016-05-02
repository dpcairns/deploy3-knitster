var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var router = express.Router();
var Pattern = require('./src/js/models/PatternModel')
var db ='mongodb://127.0.0.1:27017/test';

mongoose.connect(db);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
	}))

app.use(express.static(__dirname + "/src"));

router.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "DELETE, GET, HEAD, POST, PUT, OPTIONS, TRACE");

	next();
});

router.get('/', function(req,res){
	res.send('hello and welcome to the api')
});

router.route('/patterns')
.get(function (req, res) {
	console.log('finding all knits in knitster')
	Pattern.find({}).exec(function(err, patterns){
		if(err){
			console.log('error hath occured')
		} else {
			res.json(patterns);
		}
	});
})
.post(function (req, res) { //server behavior connected to $scope.addContact()..but how?
		var newPattern = new Pattern();
					newPattern.name = req.body.name;
					newPattern.img = req.body.img;
                	var rawRows = req.body.rows.split('\n');
                	newPattern.rows = rawRows.filter(function(item){
                		return item != ""
                	})

                	newPattern.description = req.body.description;


					newPattern.save(function() {
						res.json(newPattern)
					})
			});

router.route('/patterns/:PatternId')
.get(function (req, res) {
	var userId = req.params.PatternId
	Pattern.findOne({
		_id: userId
		})
	.exec(function(err, pattern){
		if (err){
			res.send('error occured in trying to find this Pattern')
		} else {
			console.log(".get in server.js says here's one pattern")
			console.log(pattern)
			res.json(pattern)
		}
	})
})
.delete(function (req, res) {
	var id = req.params.PatternId;
	Pattern.find({_id: id}).remove().exec(function (err, doc){
		res.json(doc);
	});
});

app.use('/api', router)



app.listen(5555)
console.log("knittin' pretty on port 5555")
