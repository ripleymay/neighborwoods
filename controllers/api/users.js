const User = require('../../models/user');
const Order = require('../../models/order');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  update,
  all,
  delete: deleteUser,
  checkToken
};

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    res.json( createJWT(user) );
  } catch {
    res.status(400).json('Bad Credentials');
  }
}

async function create(req, res) {
  try {
    const user = await User.create(req.body);
    // token will be a string
    const token = createJWT(user);
    // send back the token as a string which we need to account for in the client
    res.json(token);
  } catch (e) {
    res.status(400).json(e);
  }
}

async function update(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(user);
}

async function all(req, res) {
  const users = await User.find({});
  res.json(users);
}

async function deleteUser(req, res) {
  // would need to delete all orders made by this user as well..
  await Order.deleteMany({user: req.params.id})
  await User.findByIdAndDelete(req.params.id);
  const updatedUsers = await User.find({});
  res.json(updatedUsers);
}

function checkToken(req, res) {
  console.log('req.user', req.user);
  res.json(req.exp);
}

/*-- Helper Functions --*/

function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}