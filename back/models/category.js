const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "please provide a post title"]
    },
    
 },  
 {timeStamps: true}

);


module.exports = mongoose.model("categoryModel", categorySchema)