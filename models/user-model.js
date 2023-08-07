const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const {SALT_ROUNDS} = require('../config/server-config') 

const userSchema = new mongoose.Schema({
    email: {
        type : String,
        required : true,
    },
    name: {
        type: String,
        required : true,
    },
    image: {
        type: String,
        required : true,
    },
    password : {
        type: String,
        required : true,
    },
    number: {
        type: Number,
        required : true,
    },
    role: {
        type: String,
        enum : ['farmer', 'surveyor'],
        default : 'farmer',
        required : true,
    }
},{timestamps: true});

userSchema.pre('save', function(next){
    let user = this;
    if(!user.isModified('password'))return next();

    const encryptedPassword = bcrypt.hashSync(user.password, bcrypt.genSaltSync(+SALT_ROUNDS));
    user.password = encryptedPassword;
    next();
})

const User = new mongoose.model('User', userSchema);

module.exports = User;