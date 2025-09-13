const express = require('express');
const climaController = require('../controllers/climaController');
const router = express.Router();

router.get('/register', climaController.register);
router.get('/get', climaController.get);

module.exports = router;