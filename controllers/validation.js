const { body } = require('express-validator');

module.exports = [
	body('title', 'The title should not be empty').isLength({
		min: 1,
	}),
];
