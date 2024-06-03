const db = require("../database/index");
const bcrypt = require('bcrypt');

module.exports = {
  editProfile: function(req, res) {
    db.Seller.findOne({ where: { email: req.body.email } })
      .then((seller) => {
        if (!seller) {
          return res.status(404).send("Invalid email");
        }

        bcrypt.compare(req.body.password, seller.dataValues.password)
          .then((samepassword) => {
            if (samepassword) {
              
              if (req.body.newPassword) {
               
                bcrypt.hash(req.body.newPassword, 10)
                  .then((hashedNewPassword) => {
                    db.Seller.update({
                      firstname: req.body.firstname,
                      lastname: req.body.lastname,
                      address: req.body.address,
                      password: hashedNewPassword
                    }, { where: { email: req.body.email } })
                      .then((result) => {
                        res.send(result);
                      })
                      .catch((error) => {
                        console.error("Update error:", error);
                        res.status(500).send(error);
                      });
                  })
                  .catch((error) => {
                    console.error("Hash error:", error);
                    res.status(500).send(error);
                  });
              } else {
               
                db.Seller.update({
                  firstname: req.body.firstname,
                  lastname: req.body.lastname,
                  address: req.body.address
                }, { where: { email: req.body.email } })
                  .then((result) => {
                    res.send(result);
                  })
                  .catch((error) => {
                    console.error("Update error:", error);
                    res.status(500).send(error);
                  });
              }
            } else {
              res.status(401).send("Invalid password");
            }
          })
          .catch((error) => {
            console.error("Password comparison error:", error);
            res.status(500).send(error);
          });
      })
      .catch((error) => {
        console.error("Find Seller error:", error);
        res.status(500).send(error);
      });
  },

  getallSeller: function(req, res) {
    db.Seller.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error("Find all sellers error:", error);
        res.status(500).send(error);
      });
  }
};