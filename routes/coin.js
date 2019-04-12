var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController');

// Read
router.get('/',CoinController.getAll);
router.get('/id/:id', CoinController.get);
router.get('/country/:country', CoinController.getByCountry);
router.get('/name/:name', CoinController.getByName);
router.get('/year/:year', CoinController.getByYear);
router.get('/status/:status', CoinController.getByAvailable);

module.exports = router;