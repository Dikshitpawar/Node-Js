const express = require('express');
const { getOrder, addOrder } = require('../controllers/order.controller');

const router = express.Router();

router.route("/").get(getOrder).post(addOrder)


module.exports = router;