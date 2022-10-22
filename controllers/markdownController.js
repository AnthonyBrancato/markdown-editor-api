const DB_CONNECTION = require("../database/index");
const MarkdownModel = require("../models/Markdown");

const postMarkdown = async (req, res) => {
    try {
        DB_CONNECTION();

        const newMarkdown = new MarkdownModel({
            content: req.body.content,
            name: req.body.name,
            id: req.body.id,
            createdAt: new Date().toISOString()
        })

        await newMarkdown.save((err) => {
            if (err) return err
            res.json({ check: "Document inserted." })
        });
    } catch (err) {
        console.log(err);
    }
}


const getMarkdown = (req, res) => {
    const id = req.url.id

    try {
        DB_CONNECTION();
        MarkdownModel.findById(id).exec().then(doc => {
            res.json(doc)
            console.log(doc)
        })
    } catch (err) {
        console.log(err);
    }
}


module.exports = {
    postMarkdown,
    getMarkdown
}