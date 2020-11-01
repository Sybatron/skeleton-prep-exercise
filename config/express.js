const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');

module.exports = (app) => {
	app.use(cookieParser());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	//TODO: Setup the view engine
	app.engine(
		'.hbs',
		handlebars({
			layoutsDir: 'views',
			defaultLayout: 'main.hbs',
			partialsDir: 'views/partials',
			extname: '.hbs',
		})
	);
	app.set('view engine', '.hbs');

	//TODO: Setup the static files
	app.use('/static', express.static('static'));
};
