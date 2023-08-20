const { StatusCodes } = require("http-status-codes");
const { FarmerRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");

const farmerRepository = new FarmerRepository();
async function createFarmer(data) {
    try {
        const farmer = await farmerRepository.create(data);
        return farmer;
    } catch (error) {
        const appError = new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
        throw appError;
    }
}


async function findFarmerByUserId(userId) {
    try {
        const farmer = await farmerRepository.getFarmerByUserId(userId);
        return farmer;
    }
    catch (error) {
        const appError = new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
        throw appError;
    }
}
async function getAllFarmers() {
    try {
        const farmer = await farmerRepository.get();
        return farmer;
    }
    catch (error) {
        const appError = new AppError(error.message, StatusCodes.INTERNAL_SERVER_ERROR);
        throw appError;
    }
}

module.exports = {
    createFarmer,
    findFarmerByUserId,
    getAllFarmers,
}