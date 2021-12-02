const Order = require('../../models/order');

module.exports = {
    index,
    getAll,
    new: newOrder
};

async function index(req, res) {
    const orders = await Order.find({user: req.user._id, status: {'$ne': 'pending'}});
    res.json(orders);
}

function getAll(req, res) {
    pass;
}

async function newOrder(req, res) {

}