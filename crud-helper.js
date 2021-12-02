// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Tree = require('./models/tree');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, tree, order;
