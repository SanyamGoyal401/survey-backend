const { Farmer, User } = require('../models')
const CrudRepository = require('./crud-repository');

class FarmerRepository extends CrudRepository{
    constructor(){
        super(Farmer);
    }    

    async getByUserId(userId){
        console.log("farmer repository ", userId);
        try {
            const farmer = await Farmer.findOne({userId});
            return await this.combineUserFarmer(farmer);
        } catch (error) {
            throw error;
        }
    }

    async combineUserFarmer(farmer){
        const user = await User.findOne({
            _id : farmer.userId
        }).select({_id : 0, name : 1, image : 1, number : 1, email : 1});
        const userJson = {...user._doc};
        const farmerJson = {...farmer._doc};
        return {...userJson, ...farmerJson};
    }

    async get(){
        try {
            const farmers = await Farmer.find({});
            const farmerList = []
            const asyncOperation = farmers.map(async (farmer)=>{
                farmerList.push(await this.combineUserFarmer(farmer));
            })
            await Promise.all(asyncOperation);
            console.log(farmerList);
            return farmerList;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FarmerRepository;