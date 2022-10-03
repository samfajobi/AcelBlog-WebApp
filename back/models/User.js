const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [  true,"Please provide a username"],
            unique: true, 
        },
        email: {
            type: String,
            required: [true, 'Please provide an email'],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, "Please provide a password"],
            minlength: 6,
           
        },
        profilePic: {
            type: String,
            default: ""  
        }, 
        isAdmin: {
            type: Boolean,
            default: false
        },
        resetPasswordToken: String,
        resetPasswordExpire: Date

    },
    { timestamps: true }

)



const UserModel = mongoose.model('UserModel', UserSchema);

module.exports = UserModel;
  