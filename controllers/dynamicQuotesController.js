const Quote = require("../models/quotes");

const showQuote = (req, res) => {
    Quote.findOne({content: req.params.quoteContent}, (err, quoteFound) => {
        if(!err){
            if(quoteFound){
                res.send(quoteFound);
            } else{
                res.send("Quote does not exist!");
            }
        } else{
            res.send(err);
        }
    });
};

const updateQuote = (req, res) => {
    Quote.update({content: req.params.quoteContent}, {content: req.body.content, author: req.body.author}, {overwrite: true}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully updated!")
    });
};

const patchQuote = (req, res) => {
    Quote.update({content: req.params.quoteContent}, {$set: req.body}, {overwrite: true}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully updated!")
    });
};

const deleteQuote = (req, res) => {
    Quote.deleteOne({content: req.params.quoteContent}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully deleted!")
    });
};

module.exports = {
    showQuote, 
    updateQuote,
    patchQuote,
    deleteQuote
}