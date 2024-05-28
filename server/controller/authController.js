const db =require("../../server/database/sequelize/index.js")
const bcrypt = require('bcrypt');

module.exports = {
  signup: function(req, res) {
    db.signup.count({ where: { email: req.body.email } }).then((response) => {
      if (response !== 0) {
        res.status(400).send('deja email exist');
      } else {
        bcrypt.hash(req.body.password, 10).then((hashpass) => {
          db.signup.create({
            username: req.body.username,
            email: req.body.email,
            password: hashpass,
            role: req.body.role, 
          })
          .then((responsee) => {
            res.status(201).send(responsee)
          })
          .catch((err) => {
            res.status(500).send(err)
          })
        })
        .catch((err) => {
          res.status(500).send(err)
        })
      }
    })
  
  },
}
