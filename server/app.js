const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/approutes.js");

const app = express();
dotenv.config();
mongoose.connect(process.env.DATABASE_KEY, {useNewUrlParser: true, useUnifiedTopology: true,})
.then(()=>{
    console.log("Succesfully connected to MongoDB");
    app.listen(3000, ()=>{
        console.log("Listening to port 3000");
    })
});
// Middlewares
app.use(express.json()); // Sending JSON Data
app.use(express.urlencoded({ extended: true })); // Express URL Parser

// CORS Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(routes);
app.use((req, res) => {
    res.status(404).json({
      status: "404",
      msg: "The page you requested wasn't found :/",
    });
  });
  
