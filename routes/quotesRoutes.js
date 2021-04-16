const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotesController");

router.route("/quotes")
    .get(quotesController.showAllQuotes)
    .post(quotesController.publishQuote)
    .delete(quotesController.deleteAllQuotes);

module.exports = router;