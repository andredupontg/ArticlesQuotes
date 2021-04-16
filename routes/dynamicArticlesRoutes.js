const express = require("express");
const router = express.Router();
const dynamicArticlesController = require("../controllers/dynamicArticlesController");

router.route("/articles/:articleTitle")
    .get(dynamicArticlesController.showArticle)
    .put(dynamicArticlesController.updateArticle)
    .patch(dynamicArticlesController.patchArticle)
    .delete(dynamicArticlesController.deleteArticle);

module.exports = router;