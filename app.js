const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

var items = [];
var workItems = [];

app.get("/", function(req, res) {

  res.render("list", { listTitle: date(), newItem: items  });

});

app.get("/work",function(req,res){
  res.render("list", {listTitle: "Work List", newItem: workItems} );
})

app.get("/about", function(req,res){
  res.render("about");
})

app.post("/",function(req,res){

// console.log(req.body.button);

if(req.body.button === "Work" ){
  var item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
}
else{
  var item = req.body.newItem;
  items.push(item);
  res.redirect("/");
}

})

app.listen(3000, function(req, res) {
  console.log("server is live on port 3000");
})
