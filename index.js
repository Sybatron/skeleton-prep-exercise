const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const app = require('express')();
const indexRouter = require('./routes');
const autRouter = require('./routes/auth');
const mongoose = require('mongoose');

mongoose.connect(
	config.databaseUrl,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err) => {
		if (err) {
			console.error(err);
			throw err;
		}
	}
);

require('./config/express')(app);

app.use('/', autRouter);

app.use('/', indexRouter);

app.listen(
	config.port,
	console.log(`Listening on port ${config.port}! Now its up to you...`)
);
