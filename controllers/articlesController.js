const Article = require("../models/articles");

const showAllArticles = (req, res) => {
    Article.find({}, (err, articlesFound) => {
        if(!err){
            if(articlesFound){
                res.send(articlesFound);
            } else{
                res.send("We do not have articles!");
            }
        } else{
            res.send(err);
        }
    });
};

const publishArticle = (req, res) => {
    Article.findOne({title: req.body.title}, (err, articleFound) => {
        if(!err){
            if(!articleFound){
                const article = new Article({
                    title: req.body.title, 
                    content: req.body.content,
                    author: req.body.author
                });
                article.save();
                res.send("The article was published!");
            } else{
                res.send("The article already exist!");
            }
        } else{
            res.send(err);
        }
    });
};

const deleteAllArticles = (req, res) => {
    Article.deleteMany({}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully deleted!") 
    });
};

module.exports = {
    showAllArticles,
    publishArticle,
    deleteAllArticles
}