const fetch = require('node-fetch');
const Order = require('../../models/order');

const PLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.REACT_APP_GOOGLE_GEO_API_KEY}&components=country:us`;
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_GEO_API_KEY}`;

module.exports = {
    index,
    all,
    create,
    delete: deleteOrder,
    updateStatus,
    getMatchingAddys,
    getLatLng,
    checkDupes
};

async function index(req, res) {
    const orders = await Order.find({user: req.user._id}).populate('trees').sort('-createdAt').exec();
    res.json(orders);
}

async function all(req, res) {
    const orders = await Order.find({}).populate('trees').populate('user').sort('-createdAt').exec();
    res.json(orders);
}

async function create(req, res) {
    const order = new Order();
    order.user = req.user._id;
    order.address = req.body.addy;
    order.lat = req.body.coords.lat;
    order.lng = req.body.coords.lng;
    order.trees = req.body.trees.map(t => t._id);
    await order.save();
    res.json(order);
}

async function deleteOrder(req, res) {
    await Order.findByIdAndDelete(req.params.id);
    const newOrders = await Order.find({}).populate('trees').populate('user').exec();
    res.json(newOrders);
}

async function updateStatus(req, res) {
    const order = await Order.findById(req.params.id);
    order.status = req.body.status;
    await order.save();
    res.json(order);
}

async function getMatchingAddys(req, res) {
    const url = `${PLACES_URL}&input=${req.query.address}`;
    const results = await fetch(url).then((res) => res.json());
    res.json(results);
}

async function getLatLng(req, res) {
    const url = `${GEOCODE_URL}&address=${req.query.address}`;
    const results = await fetch(url).then((res) => res.json());
    res.json(results);
}

async function checkDupes(req, res) {
    const dupes = await Order.checkDupes(req.query.address);
    res.json(dupes);
}