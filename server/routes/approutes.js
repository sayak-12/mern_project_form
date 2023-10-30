const express = require("express");
const router = express.Router();
const {allblogs, createblog, updateBlog, details, deleteBlog}= require("../controllers/appcontroller")
router.post("/contact", createblog);
router.get("/", allblogs);
router.post("/edit/:id", updateBlog);
router.get("/details/:id", details);
router.delete("/delete/:id", deleteBlog);
module.exports = router;
