const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const ensureIsAdmin = require('../../config/ensureIsAdmin');

// POST /api/users
router.post('/', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);
// PUT 
router.put('/:id', ensureLoggedIn, usersCtrl.update);
// GET all
router.get('/all', ensureIsAdmin, usersCtrl.all);

module.exports = router;