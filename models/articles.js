const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: false, default: "Anonymous"}
});

const Article = new mongoose.model("Article", articleSchema);

module.exports = Article;