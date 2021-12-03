const fetch = require('node-fetch');
const Order = require('../../models/order');

const PLACES_URL = `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}&components=country:us`;
const GEOCODE_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=${process.env.REACT_APP_GOOGLE_API_KEY}`;

module.exports = {
    index,
    getAll,
    new: newOrder,
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

async function newOrder(req, res) {

}

async function getAddress(req, res) {
    try{
        const url = `${PLACES_URL}&input=${req.query.search}`;
        console.log(url);
        const results = await fetch(url).then((res) => res.json());
        res.json(results);
    } catch(e) {
        console.log(e);
        res.json('Error occurred accessing Google Places API');
    }
}

async function getLatLng(req, res) {
    try{
        const url = `${GEOCODE_URL}/&address=${req.query.search}`;
        const results = await fetch(url).then((res) => res.json());
        res.json(results);
    } catch(e) {
        console.log(e);
        res.json('Error occurred accessing Google Geocoding API');
    }
}