var db = require('../config');
var crypto = require('crypto');
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Q = require('q');

var tutorSchema = mongoose.Schema({
  name: String,
  loc: String, //TODO: find out what type this should be for GeoJSON
  likes: Number,
  email: String,
  password: String // hash and salt password...
  // subjects: {
    
  // } // ??? do we store in a different table??
});

var Tutor = mongoose.model('Tutor', tutorSchema);

Tutor.methods.comparePasswords = function (candidatePassword) {
  var savedPassword = this.password;
  return Q.Promise(function (resolve, reject) {
    bcrypt.compare(candidatePassword, savedPassword, function (err, isMatch) {
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

Tutor.pre('save', function (next) {
  var user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
    if (err) {
      return next(err);
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) {
        return next(err);
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});


module.exports = Tutor;
