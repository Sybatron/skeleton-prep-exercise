const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema.Types; 

const PlaySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    }
    
    
})

module.exports = mongoose.model('Play', PlaySchema);
