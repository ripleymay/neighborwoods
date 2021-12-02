require('dotenv').config();
require('./config/database');

const Order = require('./models/order');
const Tree = require('./models/tree');
const User = require('./models/user');

const rippy = User.findOne({});

// IIFE - Immediately Invoked Function Expression
(async function() {

  const trees = await Tree.create([
    {name: 'Texas Mountain Laurel', 
    species: 'Dermatophyllum secundiflorum',
    stature: 'S',
    description: 'Popular small tree.',
    isAvailable: true
    },
    {name: 'Desert Willow', 
    species: 'Chilopsis linearis',
    stature: 'S',
    description: 'Pretty flowers.',
    isAvailable: false
    },
    {name: 'Live Oak', 
    species: 'Quercus virginiana',
    stature: 'L',
    description: 'Careful of oak wilt!',
    isAvailable: true
    },
  ]);

  const orders = await Order.create([
    {user: rippy._id, 
    type: 'Residential', 
    status: 'Submitted', 
    address: '1707 W 41st St',
    zip: '78756'
    },
  ]);

  process.exit();

})();