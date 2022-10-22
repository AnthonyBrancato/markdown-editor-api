const express = require("express");
const router = express.Router();

// controllers
const markdownController = require('../controllers/markdownController.js')

// post
router.post("/markdowns", markdownController.postMarkdown);

//get
router.get("/markdowns/:id", markdownController.getMarkdown);

module.exports = router; 