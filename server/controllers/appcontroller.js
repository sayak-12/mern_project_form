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
const details = (req,res) =>{
  const Id = req.params.id;
  Message.findById(Id)
    .then((result) => {
      if (result != null) {
        res.json(result);
      } else {
        res.json({
          msg: "This review does not exist!",
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't update contact :/",
        error: err,
      })
    );
  
}
const updateBlog = (req,res) =>{
  const Id = req.params.id;
  Message.findByIdAndUpdate(Id, req.body, { new: true })
    .then((result) => {
      if (result != null) {
        res.json({
          msg: "Contact updated successfully!",
          content: result,
        });
      } else {
        res.json({
          msg: "This contact does not exist!",
        });
      }
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't update contact :/",
        error: err,
      })
    );
  
}
const deleteBlog = (req,res) =>{
  const Id = req.params.id;
  Message.findByIdAndDelete(Id)
    .then((result) => {
      Message.find().then((rest)=>{
        res.json({
          feedback: "contact deleted successfully",
          content: rest
        });
      })
      
    })
    .catch((err) =>
      res.json({
        msg: "Couldn't delete contact :/",
        error: err,
      })
    );
  
}
module.exports = {
    allblogs, createblog, updateBlog, details, deleteBlog
}