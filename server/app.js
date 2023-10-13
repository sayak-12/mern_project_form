const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
dotenv.config();
mongoose.connect(system.env.DATABASE_KEY)
.then(()=>{
    console.log("Succesfully connected to MongoDB");
    app.listen(3000, ()=>{
        console.log("Listening to port 3000");
    })
});


