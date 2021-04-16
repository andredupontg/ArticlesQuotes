const express = require("express");
const router = express.Router();
const articlesController = require("../controllers/articlesController");

router.route("/articles")
    .get(articlesController.showAllArticles)
    .post(articlesController.publishArticle)
    .delete(articlesController.deleteAllArticles);

module.exports = router;