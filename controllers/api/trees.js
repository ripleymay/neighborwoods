const Tree = require('../../models/tree');

module.exports = {
    index,
    all,
    avail
};

async function index(req, res) {
    const trees = await Tree.find({isAvailable: true}).sort('stature').exec();
    res.json(trees);
}

async function all(req, res) {
    const trees = await Tree.find({});
    res.json(trees);
}

async function avail(req, res) {
    const tree = await Tree.findById(req.params.id);
    tree.isAvailable = !tree.isAvailable;
    await tree.save();
    res.json(tree);
}