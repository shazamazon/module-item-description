var mongoose = require('mongoose');
var db = mongoose.connection;
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Shazamazon', {useNewUrlParser: true});


db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected!');
});


const schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  productId: Number,
  title: String,
  rating: Number,
  numOfRatings: Number,
  numOfQuestions: Number,
  price: Number,
  otherColors: Array,
  sellingPoints: Array

}, {collection: 'Item Detail Module'});

const itemDetail = mongoose.model('itemDetail', schema);

module.exports = { itemDetail };