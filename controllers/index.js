'use strict';

const express = require('express')
, router = express.Router()

router.use('/quote', require('./quotesController'))

module.exports = router