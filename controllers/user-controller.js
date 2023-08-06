const { UserService } = require("../services");
const { SuccessResponse, ErrorResponse, UploadFile } = require("../utils/common");
const { StatusCodes } = require('http-status-codes');


async function createUser(req, res) {
    try {
        const result = await UploadFile(req.files[0]);
        const url = result.url;
        const response = await UserService.createUser({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name,
            role: req.body.role,
            number: req.body.number,
            image: url,
        })
        SuccessResponse.data = response;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createUser,
}