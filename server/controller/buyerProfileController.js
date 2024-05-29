const db = require("../database/index");
const bcrypt = require('bcrypt');

module.exports = {
  editProfile: function(req, res) {
    bcrypt.hash(req.body.password, 10)
      .then((hashpass) => {
        db.Buyer.update({
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          address:req.body.address,
          password:hashpass
        },{where:{id:req.params.id}})
        .then((result) => {
          res.send(result);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  },

  getallBuyer: function(req,res){
    db.Buyer.findAll()
      .then((result) => {
        res.send(result);
      })
      .catch((error) => {
        res.status(500).send(error);
      });
  }
};
