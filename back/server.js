const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");



const app = express();

app.use(express.json());

dotenv.config()

mongoose.connect(process.env.DATABASE_URL)
.then( () => console.log('DataBase Connection Successful'))
.catch( err => console.log(err))

app.use('/api/auth',  authRoute)
app.use('/api/user',  userRoute)

const PORT = 5000; 

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`)
})