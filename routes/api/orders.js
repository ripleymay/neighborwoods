const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// routes
router.get('/', ordersCtrl.index);
router.get('/all', ordersCtrl.getAll);
router.get('/new/address', ordersCtrl.getAddress);

module.exports = router;