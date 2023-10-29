const express = require("express");
const router = express.Router();
const {allblogs, createblog}= require("../controllers/appcontroller")
router.post("/contact", createblog);
router.get("/", allblogs);
module.exports = router;
