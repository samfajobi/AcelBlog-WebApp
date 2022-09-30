const mongoose = require("mongoose")


const userSchmema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: [ true, "Please provide a Username!!"],
            unique: true,
        },

        password: {
            type: String,
            required: [ true, "Please Provide a Password!!"],
            unique: true,
            lowercase: true,

        },

        email: {
            type: String,
            required: [ true, "Please Provide an Email"]
        }
        
    }
)


const UserModel = mongoose.model("UserModel", userSchema);

module.exports = UserModel;