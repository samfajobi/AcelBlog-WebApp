const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");



const app = express();

dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DataBase Connection Successful'))
.catch( err => console.log(err))


const PORT = 5000; 

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
});