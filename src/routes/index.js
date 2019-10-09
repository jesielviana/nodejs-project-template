const express = require('express');
const usuariosRoute = require('./users');

const router = express.Router();

router.use('/users', usuariosRoute);
router.get('/', (req, res) => res.send('App Online!'));

module.exports = router;
