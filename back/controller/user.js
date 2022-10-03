const UserModel = require("../models/User")
const bcrypt = require("bcrypt");
const router = require("../routes/User");

// Update User

exports.updateUser = async (req, res, next) => {
    if(req.body.userId === req.params.id) {
        if(req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try{
            const updatedUser = await UserModel.findByIdAndUpdate(
                req.params.id, 
                {
                $set: req.body
            }, {new: true});
            res.status(200).json(updatedUser)
        } catch(error) {
            res.status(401),json(err)  

        } 
       
    }
    else {
        res.status(401).json("You are not allowed!!")
    }
 
}

// Delete User

exports.deleteUser = async (req, res, next) => {
    if(req.body.userId === req.params.id) {
        try {
            await UserModel.findByIdAndDelete(req.params.id);
            res.status(200).json("User Successfully Deleted!!");

        } catch(error) {
            res.status(401).json(error.message)
        }
    } else {
        res.status(401).json("Not allowed!!")
    }
}




  
