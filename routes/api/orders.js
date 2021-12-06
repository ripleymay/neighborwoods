const express = require('express');
const router = express.Router();
const ordersCtrl = require('../../controllers/api/orders');

// routes
router.get('/', ordersCtrl.index);
router.post('/', ordersCtrl.create);
router.get('/all', ordersCtrl.getAll);
router.get('/new/address', ordersCtrl.getMatchingAddys);
router.get('/new/latlng', ordersCtrl.getLatLng);

module.exports = router;