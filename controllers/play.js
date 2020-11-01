const Play = require('../models/play');

const getAllPlays = async (callback) => { 
    const play = await Play.find().lean();    
    return play;
}



module.exports = {
    getAllPlays,
    getPlay
}