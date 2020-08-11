const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts = [];

const length = 100;


app.get("/", function(req,res){
  res.render("Blog site");
})

app.get("/username", function(req, res){
  res.render("username", {posts:posts});
})

app.get("/compose", function(req, res){
  res.render("compose");
})

app.post("/compose", function(req, res){
  const post = {
    title: req.body.postTitle,
    content: req.body.postBody.substring(0, length),
  };


  posts.push(post);

  res.redirect("/success");
})

app.get("/success", function(req,res){
  res.render("success");
})

app.get("/about", function(req,res){
  res.render("about");
})





















app.listen(3000, function() {
  console.log("Server started on port 3000");
});
