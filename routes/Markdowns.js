const express = require("express");
const router = express.Router();

// controllers
const markdown = require('../controllers/markdown.js')

// post
router.post("/markdowns", markdown.postMarkdown);

// get
router.get("/markdowns/:id", markdown.getMarkdown);

// patch
router.patch("/markdowns/:id", markdown.patchMarkdown);

// delete
router.delete("/markdowns/:id", markdown.deleteMarkdown);

module.exports = router; 