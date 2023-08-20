const express = require('express');
const { FarmerController } = require('../../controllers');

const router = express.Router();

router.post('/', FarmerController.createFarmer);
router.get('/', FarmerController.getFarmers);


router.post('/check', (req, res)=>{
    res.status(200).json({message: "Okay"});
})


module.exports = router;