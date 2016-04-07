var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');

var tutorSchema = mongoose.Schema({
  name: String,
  loc: String, //TODO: find out what type this should be for GeoJSON
  likes: Number,
  email: String,
  password: String, // hash and salt password...
  subjects: {
    
  } // ??? do we store in a different table??
});

var Tutor = mongoose.model('Tutor', tutorSchema);

// var createSha = function(url) {
//   var shasum = crypto.createHash('sha1');
//   shasum.update(url);
//   return shasum.digest('hex').slice(0, 5);
// };

// linkSchema.pre('save', function(next) {
//   var code = createSha(this.url);
//   this.code = code;
//   next();
// });

module.exports = Link;
