const Tree = require('../../models/tree');

module.exports = {
    index,
    getAvailable
};

// need to protect this for just admin
async function index(req, res) {
    const trees = await Tree.find({});
    res.json(trees);
}

async function getAvailable(req, res) {
    const trees = await Tree.find({isAvailable: true});
    res.json(trees);
}