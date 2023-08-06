const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY, EXPIRES_IN } = require('../../config/server-config');


function matchPassword(originalP, encryptedP){
    try{
        return bcrypt.compareSync(originalP, encryptedP);
    }
    catch(error){
        throw error;
    }
}

function createToken(payload){
    try{
        const token = jwt.sign(payload, SECRET_KEY, {expiresIn: EXPIRES_IN});
        return token;

    }
    catch(error){
        throw error;
    }
}

function verifyToken(token){
    try{
        return jwt.verify(token, SECRET_KEY);
    }
    catch(error){
        throw error;
    }
}

module.exports = {
    matchPassword,
    verifyToken,
    createToken,
}