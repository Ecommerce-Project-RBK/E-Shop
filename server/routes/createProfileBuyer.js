const express = require('express');
const {editProfile, getallBuyer} = require('../controller/buyerProfileController');
const router = express.Router();
router.get('/profile/show', getallBuyer)
router.put('/profile/update/:id',editProfile)


module.exports = router;
