const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');
const ensureIsAdmin = require('../../config/ensureIsAdmin');

// routes
router.get('/', ordersCtrl.index);
router.post('/', ordersCtrl.create);
router.get('/all', ordersCtrl.all);
router.get('/new/address', ordersCtrl.getMatchingAddys);
router.get('/new/latlng', ordersCtrl.getLatLng);
router.get('/new/duplicates', ordersCtrl.checkDupes);

module.exports = router;