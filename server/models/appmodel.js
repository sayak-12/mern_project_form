const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    name:{
        type: "string",
        required: true
    },
    message:{
        type:"string",
        required:true
    }
} ,{timestamps:true});
const Message = mongoose.model("contact", contactSchema);
module.exports = Message;