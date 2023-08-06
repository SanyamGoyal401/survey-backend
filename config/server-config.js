const dotenv = require('dotenv')

dotenv.config();

module.exports = {
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    SALT_ROUNDS : process.env.SALT_ROUNDS,
    SECRET_KEY : process.env.SECRET_KEY,
    EXPIRES_IN : process.env.EXPIRES_IN,
};