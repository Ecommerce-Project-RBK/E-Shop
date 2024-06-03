const db = require("../database/index");
const bcrypt = require('bcrypt');

module.exports = {
  editProfile: function(req, res) {
    db.Buyer.findOne({ where: { email: req.body.email } })
      .then((buyer) => {
        if (!buyer) {
          return res.status(404).send("Invalid email");
        }

        bcrypt.compare(req.body.password, buyer.dataValues.password)
          .then((samepassword) => {
            if (samepassword) {
              
              if (req.body.newPassword) {
               
                bcrypt.hash(req.body.newPassword, 10)
                  .then((hashedNewPassword) => {
                    db.Buyer.update({
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
               
                db.Buyer.update({
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
          .catch((compareError) => {
            console.error("Password comparison error:", compareError);
            res.status(500).send(compareError);
          });
      })
      .catch((error) => {
        console.error("Find buyer error:", error);
        res.status(500).send(error);
      });
  },

  getallBuyer: function(req, res) {
    db.Buyer.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        console.error("Find all buyers error:", error);
        res.status(500).send(error);
      });
  }
};
