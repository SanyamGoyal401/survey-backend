const mongoose = require('mongoose');
const { MONGO_URL } = require('./server-config');

async function connectDB(){
    try{
        await mongoose.connect(MONGO_URL);
        console.log('Successfully connected to database');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;