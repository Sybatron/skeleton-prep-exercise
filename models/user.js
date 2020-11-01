const mongoose = require('mongoose');
const UserShcema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    likedPlays: [{
        type: 'ObjectId',
        ref: 'Play'
    }]

})

module.exports = mongoose.model('User', UserShcema);