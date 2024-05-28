const db = require("../database/index");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



//// function to register the user as a seller
const registerSeller = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newSeller = await db.Seller.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });

    res.status(201).json(newSeller);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};



///// function to register the user as a buyer
const registerBuyer = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newBuyer = await db.Buyer.create({
      name,
      email,
      phoneNumber,
      password: hashedPassword,
    });
    res.status(201).json(newBuyer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};


//// function to login that checks the user in each table starting with seller table , buyer table then admin table 
//// if the user is not in any on them it returns and error 
const login = async (req, res) => {
  const { email, phoneNumber, password } = req.body;
  try {
    if (!email && !phoneNumber) {
      return res
        .status(400)
        .json({ error: "Please insert your Email or Phone Number" });
    }

    var user = await db.Seller.findOne({
      where: email ? { email } : { phoneNumber },
    });

    if (!user) {
      user = await db.Buyer.findOne({
        where: email ? { email } : { phoneNumber },
      });
    }

    if (!user) {
      user = await db.Admin.findOne({
        where: email ? { email } : { phoneNumber },
      });
    }

    if (!user) {
      return res.status(401).json({ error: "Please re-check your info" });
    }

    const pwChecker = await bcrypt.compare(password, user.password);
    if (!pwChecker) {
      return res.status(401).json({ error: "Wrong password" });
    }

    //// we assign roles to users from each table to pass it in the token 
    var role;
    if (user instanceof db.Admin) {
      role = "admin";
    } else if (user instanceof db.Seller) {
      role = "seller";
    } else {
      role = "buyer";
    }
//// we pass the user id , user name and his role (the role we took it from the conditions above )

    const token = jwt.sign(
      { id: user.id, name: user.name, role: role },
      "your_jwt_secret"
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { registerSeller, registerBuyer, login };
