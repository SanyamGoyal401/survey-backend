const { Farmer } = require('../models')
const CrudRepository = require('./crud-repository');

class FarmerRepository extends CrudRepository{
    constructor(){
        super(User);
    }    

    async getFarmerByUserId(userId){
        try {
            const user = await User.findOne({userId});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserRepository;