const mongoose = require('mongoose');


const farmerSchema = new mongoose.Schema({
    state: {
        type: String,
        default: null,
    },
    taluka: {
        type: String,
        default: null,
    },
    village: {
        type: String,
        default: null,
    },
    householdMembers: {
        type: Number,
        default: null,
    },
    householdWorking: {
        type: Number,
        default: null,
    },
    selfHelpGroupMembers: {
        type: Number,
        default: null,
    },
    landOwn: {
        type: Number,
        default: null,
    },
    landLease: {
        type: Number,
        default: null,
    },
    userId: {
        type: String,
        required: true,
    },
}, { timestamps: true });


const Farmer = new mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;