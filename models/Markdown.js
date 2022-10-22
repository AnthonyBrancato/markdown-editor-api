const mongoose = require("mongoose");

const markdownSchema = new mongoose.Schema({
    name: String,
    content: String,
    createdAt: Date,
    id: Number
})

module.exports = mongoose.model('markdownFiles', markdownSchema, "markdownFiles")