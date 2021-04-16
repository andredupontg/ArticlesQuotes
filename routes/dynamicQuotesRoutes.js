const express = require("express");
const router = express.Router();
const dynamicQuotesController = require("../controllers/dynamicQuotesController");

router.route("/quotes/:quoteContent")
    .get(dynamicQuotesController.showQuote)
    .put(dynamicQuotesController.updateQuote)
    .patch(dynamicQuotesController.patchQuote)
    .delete(dynamicQuotesController.deleteQuote);

module.exports = router;