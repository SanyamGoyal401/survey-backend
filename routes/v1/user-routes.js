const express = require('express');
const { UserController } = require('../../controllers');

const {multerUploadMiddleware} = require('../../middlewares');

const router = express.Router();

router.post('/signup', multerUploadMiddleware, UserController.createUser);

router.post('/check', (req, res)=>{
    res.status(200).json({message: "Okay"});
})


module.exports = router;