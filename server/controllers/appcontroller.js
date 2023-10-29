const Message = require("../models/appmodel");

const allblogs = (req, res)=>{
    Message.find().then(result=>{
        res.json(result);
    })
    .catch(err=>{
        res.json({
            errormsg: "Error occured while reading data",
            error: err
        })
    })
}

const createblog = (req,res)=>{
    const {name, message}=req.body;
    const entry = new Message({
      name: name,
      message: message
    });
    console.log(entry);
    entry
    .save()
    .then((result) =>
      res.json({
        feedback: "Message successfully sent!",
        content: result,
      })
    )
    .catch((err) =>
      res.json({
        feedback: "Couldn't send message :/",
        content: err,
      })
    );
}
module.exports = {
    allblogs, createblog
}