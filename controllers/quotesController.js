const Quote = require("../models/quotes");

const showAllQuotes = (req, res) => {
    Quote.find({}, (err, quotesFound) => {
        if(!err){
            if(quotesFound){
                res.send(quotesFound);
            } else{
                res.send("We do not have quotes!");
            }
        } else{
            res.send(err);
        }
    });
};

const publishQuote = (req, res) => {
    Quote.findOne({content: req.body.content}, (err, quoteFound) => {
        if(!err){
            if(!quoteFound){
                const quote = new Quote({
                    content: req.body.content,
                    author: req.body.author
                });
                quote.save();
                res.send("The quote was published!");
            } else{
                res.send("The quote already exist!");
            }
        } else{
            res.send(err);
        }
    });
};

const deleteAllQuotes = (req, res) => {
    Quote.deleteMany({}, (err) => {
        (err) ? res.send(err) : res.send("Succesfully deleted!")
    });
};  

module.exports = {
    showAllQuotes,
    publishQuote,
    deleteAllQuotes
}