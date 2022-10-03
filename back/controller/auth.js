const UserModel = require("../models/User")
const bcrypt = require("bcrypt");

exports.register = async (req, res, next) => {
    // const { username, email, password } = req.body;
 
    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPass = await bcrypt.hash(req.body.password, salt)
        const newUser = new UserModel({  
        username: req.body.username,
        email: req.body.email,
        password: hashedPass
    })  
    const user = await newUser.save();
    res.status(200).json({
        status: true,
        user: user        
    })  

    } catch(error) {
        res.status(500).json({
            status: false,
            error: error.message
        })

    }
    
   
};



exports.login = async (req, res, next) => {
    const user = await UserModel.findOne({username: req.body.username})
    !user && res.status(400).json("Wrong Credentials, No Username found!")

    const validate = await bcrypt.compare(req.body.password, user.password)
    !validate && res.status(400).json("Wrong Credentials!! Password Incorrect!!")

    const {password, ...others } = user._doc
    res.status(200).json(others)
};



exports.forgotPassword = (req, res, next) => { 
    res.send("Forgot Password Route")
};  


exports.resetPassword = (req, res, next) => {
    res.send("ResetPassword Route")
};