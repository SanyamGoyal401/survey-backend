const { StatusCodes } = require("http-status-codes");
const { UserRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const userRepository = new UserRepository();
async function createUser(data) {
    try {
        const user = await userRepository.create(data);
        return user;
    } catch (error) {
        const appError = new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
        throw appError;
    }
}

async function findUser(email){
    try{
        const user = await userRepository.getUserByEmail(email);
        return user;

    }
    catch(error){
        const appError = new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
        throw appError;
    }
}

module.exports = {
    createUser,
    findUser,
}