//? Modules Required
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const articlesRoutes = require("./routes/articlesRoutes");
const dynamicArticlesRoutes = require("./routes/dynamicArticlesRoutes");
const quotesRoutes = require("./routes/quotesRoutes");
const dynamicQuotesRoutes = require("./routes/dynamicQuotesRoutes");

//? App Setup
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//? Database Connection
try {
    mongoose.connect(process.env.DATABASE_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Database Connection Succesfull");
} catch (err) {
    console.log(err);
}

//? API
app.use(articlesRoutes);
app.use(dynamicArticlesRoutes);
app.use(quotesRoutes);
app.use(dynamicQuotesRoutes);

//? Server Port 
app.listen(3000, () => { console.log("Server running on port 3000") });