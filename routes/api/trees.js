const express = require('express');
const router = express.Router();
const treesCtrl = require('../../controllers/api/trees');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// routes
router.get('/available', treesCtrl.getAvailable);

module.exports = router;