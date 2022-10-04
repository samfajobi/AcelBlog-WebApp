const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "please provide a post title"]
    },
    desc: {
        type: String,
        required: [ true, "please provide a post description"]
    },
    username: {
        type: String,
        required: true
    },  
    photo: {
        type: String,
        required: [ false, "please provide a profile picture"]
    },
    categories: {
        type: Array,
        required: false
    }
 },  
 {timeStamps: true}

);


module.exports = mongoose.model("postsModel", postsSchema)