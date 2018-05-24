var mongoose = require('mongoose');

mongoose.connect('mongodb://mongoose.location.com/pairguru')

const postSchema = new mongoose.Schema({
  title: String,
  key: String,
  description: String,
});

module.exports = mongoose.model('Post', postSchema);
