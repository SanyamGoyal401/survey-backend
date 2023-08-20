const { FarmerService } = require("../services");
const { SuccessResponse, ErrorResponse, UploadFile } = require("../utils/common");
const { StatusCodes } = require('http-status-codes');


async function createFarmer(req, res) {
    try {
        const state = req.body.state ? req.body.state : '';
        const taluka = req.body.taluka ? req.body.taluka : '';
        const village = req.body.village ? req.body.village : '';
        const householdMembers = req.body.householdMembers ? req.body.householdMembers : '';
        const householdWorking = req.body.householdWorking ? req.body.householdWorking : '';
        const selfHelpGroupMembers = req.body.selfHelpGroupMembers ? req.body.selfHelpGroupMembers : '';
        const landOwn = req.body.landOwn ? req.body.landOwn : '';
        const landLease = req.body.landLease ? req.body.landLease : '';
        const userId = req.body.userId

        const data = {
            state,
            taluka,
            village,
            householdMembers,
            householdWorking,
            selfHelpGroupMembers,
            landLease,
            landOwn,
            userId,
        };
        const farmer = await FarmerService.createFarmer(data);
        SuccessResponse.data = farmer;
        return res.status(StatusCodes.OK).json(SuccessResponse);
    }
    catch (error) {
        ErrorResponse.error = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getFarmers(req, res){
    try {
        const userId = req.query.id;
        if(userId){
            console.log("farmer controller ", userId);
            const farmer = await FarmerService.findFarmerByUserId(userId);
            SuccessResponse.data = farmer;
            return res.status(StatusCodes.OK).json(SuccessResponse);
        }
        else{
            const farmers = await FarmerService.getAllFarmers();
            SuccessResponse.data = farmers;
            return res.status(StatusCodes.OK).json(SuccessResponse);
        }
    } catch (error) {
        ErrorResponse.error = error.message;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

module.exports = {
    createFarmer,
    getFarmers,
}