const mongoose = require("mongoose");

const markdownSchema = new mongoose.Schema({
    name: String,
    content: String,
    createdAt: Date,
    updatedAt: Date,
    id: Number
})

module.exports = mongoose.model('markdownFiles', markdownSchema, "markdownFiles")