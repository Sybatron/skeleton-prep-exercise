const { Router } = require('express');
const { validationResult } = require('express-validator');
const { getUserStatus, checkAuthentication } = require('../controllers/user'); 
const validation = require('../controllers/validation'); 
const Play = require('../models/play');

const router = Router();

router.get('/',getUserStatus, async (req, res) => {  
    res.render('home', { 
    isLoggedIn:  req.isLoggedIn, 
    });    
})



module.exports = router;