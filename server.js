var express = require("express")
var morgon = require("morgan")


// connection with mongo db
var mongoose = require("mongoose")
var url = "mongodb://localhost:27017/MEAN_APP";
mongoose.connect(url)
// ------------------------------------------

// creating the express object
var app = express()
app.use(morgon("dev"))
// ------------------------------------------




console.log("Listening on 3000")
app.listen(3000)
