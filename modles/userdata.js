var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('User', userSchema);