const fetch = require('node-fetch');
const Order = require('../../models/order');

const PLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&components=country:us`;
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

module.exports = {
    index,
    getAll,
    create,
    getAddress,
    getLatLng
};

async function index(req, res) {
    const orders = await Order.find({user: req.user._id, status: {'$ne': 'pending'}});
    res.json(orders);
}

function getAll(req, res) {
    pass;
}

async function create(req, res) {
    pass;
}

async function getAddress(req, res) {
    const url = `${PLACES_URL}&input=${req.query.search}`;
    const results = await fetch(url).then((res) => res.json());
    res.json(results);
}

async function getLatLng(req, res) {
    const url = `${GEOCODE_URL}&address=${req.query.search}`;
    const results = await fetch(url).then((res) => res.json());
    res.json(results);
}