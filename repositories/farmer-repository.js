const { Farmer } = require('../models')
const CrudRepository = require('./crud-repository');

class FarmerRepository extends CrudRepository{
    constructor(){
        super(Farmer);
    }    

    async getFarmerByUserId(userId){
        try {
            const farmer = await Farmer.findOne({userId});
            return farmer;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = FarmerRepository;