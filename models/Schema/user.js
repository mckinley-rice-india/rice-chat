var mongoose = require('mongoose');
var userSchema = new mongoose.Schema({
    password: String,
    email: String,
    subscribed: {
    	type: Boolean,
    	default: false
    }
}, {usePushEach: true});

module.exports = mongoose.model('Users', userSchema);