const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// routes
router.get('/all', ordersCtrl.getAll);

module.exports = router;