const express = require('express');
const router = express.Router();
const treesCtrl = require('../../controllers/api/trees');
const ensureIsAdmin = require('../../config/ensureIsAdmin');

// routes
router.get('/', treesCtrl.index);
router.get('/all', ensureIsAdmin, treesCtrl.all);

module.exports = router;