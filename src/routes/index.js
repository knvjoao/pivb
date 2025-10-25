const express = require('express');
const router = express.Router();

const cityController = require('../controllers/cityController');
const vaccinationController = require('../controllers/vaccinationController');

router.get('/cities', cityController.list);
router.get('/cities/:id', cityController.details);
router.get('/vaccination-points/:cityId', vaccinationController.points);

module.exports = router;