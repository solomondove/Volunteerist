const Offer = require('../../models/Offer');

const validateOfferInput = require('../../validation/offer');

const express = require('express');
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: 'This is the offers route' }));

module.exports = router;