var express = require("express");
const res = require("express/lib/response");
var app = express();
const fs = require('fs');
const path = require('path');

app.use(express.json()); 

app.get("/getproductlist", (req, res, next) => {
    var jsonfile = fs.readFileSync('product.json');
    res.json(JSON.parse(jsonfile));
});


app.get("/getproduct/:name", (req, res, next) => {
    var name = req.params.name;
    console.log(name);
    var jsonfile = fs.readFileSync('product.json');
    jsonfile = JSON.parse(jsonfile);
    res.json(JSON.parse(jsonfile));
    const product = jsonfile.filter(user=> user.product === name);
    res.json(product);
});

app.post("/saveproduct",(req,res,next)=>{
    var product = req.body;
    console.log(product);
    var jsonfile = fs.readFileSync('product.json');
    jsonfile = JSON.parse(jsonfile);
    jsonfile.push(product);
    jsonfile = JSON.stringify(jsonfile);
    fs.writeFileSync('product.json', jsonfile);
    res.send({success:true,msg:'Product added successfully'});
});


app.delete("/deleteproduct/:name", (req, res, next) => {
    var name = req.params.name;
    var jsonfile = fs.readFileSync('product.json');
    jsonfile = JSON.parse(jsonfile);
    const product = jsonfile.filter(user=> user.product !== name);
    fs.writeFileSync('product.json',JSON.stringify(product));
    res.send({success:true,msg:'Product delete successfully'});
});


app.put("/updateproduct/:name",(req,res,next)=>{
    var name = req.params.name;
    var jsonfile = fs.readFileSync('product.json');
    var parsejsonfile = JSON.parse(jsonfile);
    var allproduct = parsejsonfile.filter(prod=> prod.product !== name);
    var newproduct = req.body;
    allproduct.push(newproduct);
    allproduct = JSON.stringify(allproduct);
    fs.writeFileSync('product.json',allproduct);
    res.send({success:true,msg:'Product Updated Successfully'});

});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});

