const Article = require("../models/articles");

const showArticle = (req, res) => {
    Article.findOne({title: req.params.articleTitle}, (err, articleFound) => {
        if(!err){
            if(articleFound){
                res.send(articleFound);
            } else{
                res.send("Article does not exist!")
            }
        } else{
            res.send(err);
        }
    });
};

const updateArticle = (req, res) => {
    Article.update({title: req.params.articleTitle}, {title: req.body.title, content: req.body.content, author: req.body.author}, {overwrite: true}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully updated!")
    });
};

const patchArticle = (req, res) => {
    Article.update(
        {title: req.params.articleTitle},
        {$set: req.body},
        {overwrite: true}, (err) => {
            (err) ? res.send(err) : res.send("Succesfully updated!")
        }
    );
};

const deleteArticle = (req, res) => {
    Article.deleteOne({title: req.params.articleTitle}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully deleted!")
    });
};

module.exports = {
    showArticle,
    updateArticle,
    patchArticle,
    deleteArticle
}