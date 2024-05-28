const db = require("../database/index");

//// function to get all users (buyers and sellers)
const getAllUsers = async (req, res) => {
  try {
    const buyers = await db.Buyer.findAll();
    const sellers = await db.Seller.findAll();

    res.status(200).json({ buyers, sellers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

//// function to get a user by email
const getUserByEmail = async (req, res) => {
  const { email } = req.params;
  try {
    let user = await db.Buyer.findOne({ where: { email } });
    if (!user) {
      user = await db.Seller.findOne({ where: { email } });
    }

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

/// function to delete a user
const deleteUser = async (req, res) => {
  const { email } = req.body;
  try {
    let user = await db.Buyer.findOne({ where: { email } });
    if (!user) {
      user = await db.Seller.findOne({ where: { email } });
    }

    if (!user) {
      return res.status(404).json({ error: "user not found" });
    }

    await user.destroy();

    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllUsers, getUserByEmail, deleteUser };
