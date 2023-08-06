const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {SALT_ROUNDS} = require('../config/server-config') 

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        require : true,
    },
    name: {
        type: String,
        require : true,
    },
    image: {
        type: String,
        require : true,
    },
    password : {
        type: String,
        require : true,
    },
    number: {
        type: Number,
        require: true,
    },
    role: {
        type: String,
        enum : ['farmer', 'surveyor'],
        default : 'farmer',
        require: true,
    }
});

userSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password'))return next();

    const encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(+SALT_ROUNDS));
    user.password = encryptedPassword;
    next();
})

const User = new mongoose.model('User', userSchema);

module.exports = User;