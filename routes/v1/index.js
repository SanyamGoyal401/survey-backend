const express = require('express');

const UserRoutes = require('./user-routes');
const FarmerRoutes = require('./farmer-routes');

const router = express.Router();

router.use('/users', UserRoutes);
router.use('/farmers', FarmerRoutes);

module.exports = router;