const { Router } = require('express');
const { saveUser, verifyUser, checkGestAccess, getUserStatus } = require('../controllers/user'); 
const { validationResult } = require('express-validator');
const validationRegister = require('../controllers/validationRegister');
const validationLogin = require('../controllers/validationLogin');

const router = Router();

router.get('/login', checkGestAccess, getUserStatus, (req,res) => {
    res.render('login', { isLoggedIn: req.isLoggedIn })
}) 


module.exports = router;