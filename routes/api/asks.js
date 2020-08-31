const Ask = require('../../models/Ask');

const validateAskInput = require('../../validation/ask');

const express = require('express');
const router = express.Router();

router.get("/test", (req, res) => res.json({ msg: 'This is the asks route'}));

module.exports = router;