const fetch = require('node-fetch');
const Order = require('../../models/order');

const PLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.REACT_APP_GOOGLE_GEO_API_KEY}&components=country:us`;
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_GEO_API_KEY}`;

module.exports = {
    index,
    all,
    create,
    getMatchingAddys,
    getLatLng
};

async function index(req, res) {
    const orders = await Order.find({user: req.user._id});
    res.json(orders);
}

async function all(req, res) {
    const orders = await Order.find({});
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