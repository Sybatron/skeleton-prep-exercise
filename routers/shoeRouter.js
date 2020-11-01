const { shoeController } = require('../controllers');

module.exports = (router) => {
	router.get('/all', shoeController.get.all);
	router.get('/create', shoeController.get.create);
	router.get('/details', shoeController.get.details);
	router.get('/edit', shoeController.get.edit);
	return router;
};
