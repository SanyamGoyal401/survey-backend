const express = require('express');

const v1Routes = require('./v1');
const router = express.Router();
const {multerUploadMiddleware} = require('../middlewares');

router.use('/v1', multerUploadMiddleware, v1Routes);

module.exports = router;