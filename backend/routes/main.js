const express = require('express');
const router = express.Router();
const admin = require('firebase-admin');

router.get('/', (req, res) => {
  res.send('Hello World')
});

module.exports = router;
