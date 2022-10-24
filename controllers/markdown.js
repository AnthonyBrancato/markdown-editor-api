const DatabaseConnect = require("../database/index");
const MarkdownModel = require("../models/Markdown");
const formatISODate = require("../helpers/formatISODate")


// post
const postMarkdown = async (req, res) => {
    try {
        DatabaseConnect()
        const currentISODate = formatISODate(new Date().toISOString())

        const newMarkdown = new MarkdownModel({
            content: req.body.content,
            name: req.body.name,
            id: req.body.id,
            createdAt: currentISODate
        })

        await newMarkdown.save((err) => {
            if (err) return err
            res.status(201).json({ check: "Document inserted." })
        });
    } catch (err) {
        console.log(err);
    }
}

// get
const getMarkdown = async (req, res) => {
    try {
        DatabaseConnect();
        const doc = await MarkdownModel.findOne({ id: req.params.id })
        res.status(200).json(doc)
    } catch (err) {
        console.log(err);
    }
}


// patch
const patchMarkdown = async (req, res) => {
    try {
        DatabaseConnect();
        await MarkdownModel.findOneAndUpdate({ id: req.params.id }, { content: req.body.content, updatedAt: req.body.updatedAt })
        res.status(200).json({
            message: "Document updated."
        })
    } catch (err) {
        console.log(err);
    }
}

// delete
const deleteMarkdown = async (req, res) => {
    try {
        DatabaseConnect();
        await MarkdownModel.deleteOne({ id: req.params.id })
        res.status(200).json({ message: 'Document deleted.' });
    } catch (err) {
        console.log(err);
    }
}


const MarkdownController = {
    postMarkdown,
    getMarkdown,
    patchMarkdown,
    deleteMarkdown
}

module.exports = MarkdownController