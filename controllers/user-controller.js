const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse, UploadFile } = require("../utils/common");
const { StatusCodes } = require('http-status-codes');
const { createToken, matchPassword } = require("../utils/common/auth");
const AppError = require("../utils/errors/app-error");


async function createUser(req, res) {
    try {
        const result = await UploadFile(req.files[0]);
        const url = result.url;
        const data = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            role: req.body.role,
            number: req.body.number,
            image: url,
        };
        const user = await UserService.createUser(data);
        const token = createToken({id: user._id, email: user.email});
        SuccessResponse.data = {...user._doc, token};
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function verifyUser(req, res){
    try{
        const email = req.body.email;
        const password = req.body.password;
        const user = await UserService.findUser(email);
        console.log(user);
        if(!user){
            throw new AppError("User doesn't exists", StatusCodes.BAD_REQUEST);
        }

        if(!matchPassword(password, user.password)){
            throw new AppError('Password Incorrect', StatusCodes.BAD_REQUEST);
        }

        const token = createToken({id: user._id, email: user.email});

        SuccessResponse.data = {...user._doc, token};
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}


module.exports = {
    createUser,
    verifyUser,
}