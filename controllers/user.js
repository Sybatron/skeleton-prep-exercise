const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (data) => {
	const token = jwt.sign(data, config.privateKey);
	return token;
};

const saveUser = async (req, res) => {
	const { username, password } = req.body;
	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	const user = new User({
		username,
		password: hash,
		likedPlays: [],
	});

	try {
		const userObject = await user.save();
		const token = generateToken({
			userID: userObject._id,
			username: userObject.username,
		});
		res.cookie('aid', token);
		return true;
	} catch (e) {
		console.log(e);
		return res.redirect('/register');
	}
};

const verifyUser = async (req, res) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	if (!user) {
		return false;
	}

	const status = await bcrypt.compare(password, user.password);
	if (status) {
		const token = generateToken({
			userID: user._id,
			username: user.username,
		});
		res.cookie('aid', token);
	}
	return status;
};

const getUserStatus = (req, res, next) => {
	const token = req.cookies['aid'];
	if (!token) {
		req.isLoggedIn = false;
	}

	try {
		jwt.verify(token, config.privateKey);
		req.isLoggedIn = true;
	} catch (e) {
		req.isLoggedIn = false;
	}
	next();
};

const checkGestAccess = (req, res, next) => {
	const token = req.cookies['aid'];
	if (token) {
		return res.redirect('/');
	}
	next();
};

const checkAuthentication = async (req, res, next) => {
	const token = req.cookies['aid'];
	if (!token) {
		return res.redirect('/login');
	}

	try {
		decodedObject = jwt.verify(token, config.privateKey);
		const user = await User.findById(decodedObject.userID);
		req.user = user;
		next();
	} catch (e) {
		return res.redirect('/login');
	}
};

module.exports = {
	saveUser,
	verifyUser,
	getUserStatus,
	checkGestAccess,
	checkAuthentication,
};
