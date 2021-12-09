const Tree = require('../../models/tree');

module.exports = {
    index,
    all,
    avail,
    update,
    create
};

async function index(req, res) {
    const trees = await Tree.find({isAvailable: true}).sort('stature').exec();
    res.json(trees);
}

async function all(req, res) {
    const trees = await Tree.find({}).sort('name').exec();
    res.json(trees);
}

async function avail(req, res) {
    const tree = await Tree.findById(req.params.id);
    tree.isAvailable = !tree.isAvailable;
    await tree.save();
    res.json(tree);
}

async function update(req, res) {
    const tree = await Tree.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json(tree);
}

async function create(req, res) {
    const tree = new Tree();
    tree.name = req.body.name;
    tree.species = req.body.species;
    tree.stature = req.body.stature;
    tree.description = req.body.description;
    await tree.save();
    res.json(tree);
}