const express = require('express');
const { UserController } = require('../../controllers');

const router = express.Router();

router.post('/signup', UserController.createUser);
router.post('/login', UserController.verifyUser);


router.post('/check', (req, res)=>{
    res.status(200).json({message: "Okay"});
})


module.exports = router;