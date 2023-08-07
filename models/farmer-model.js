const mongoose = require('mongoose');


const farmerSchema = new mongoose.Schema({
    state: {
        type : String,
        required : true,
    },
    taluka: {
        type: String,
    },
    mandal: {
        type: String,
    },
    householdMembers : {
        type: Number,
    },
    selfHelpGroupMembers: {
        type: Number,
    },
    landOwn: {
        type: Number,
    },
    landLease: {
        type: Number,
    },
    userId: {
        type: String,
        required : true,
    },
},{timestamps: true});


const Farmer = new mongoose.model('Farmer', userSchema);

module.exports = Farmer;