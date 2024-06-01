const db = require('../database/index');

module.exports = {

  buy: function(req, res) {
    db.cart.create(req.body).then((result)=>{res.send(result)}).catch((error)=>{res.status(500).send(error)})
  
}, 



}