const { query } = require("express");
var express = require("express");
const res = require("express/lib/response");
var app = express();
const fs = require('fs');
const path = require('path');
const { Z_ERRNO } = require("zlib");
const database = require('./conn');


app.use(express.json()); 

app.get("/getemployeelist", (req, res, next) => {
    let query = "select * from emp_data";
    list = {};
   database.query(query,function(err,result,fields){
       if (err) throw err ;
    res.json(result);
    console.log(result);
   });
  // res.json(list);
});


app.get("/getemployee/:name", (req, res, next) => {
    var name = req.params.name;
    console.log(name);
    let query = "select * from emp_data where name=?";
    database.query(query,[name],function(err,result,name){
        if(err) throw err ;
        res.json(result);
    })
});

app.post("/saveemployee",(req,res,next)=>{
    var employee = req.body;

    let query =  'insert into emp_data(name,designation,manager) values(?,?,?)';
    let name = employee.name;
    let designation = employee.designation;
    let manager = employee.manager;
  
    // Creating queries
    database.query(query, [name,designation,manager], (err, rows) => {
        if (err) throw err;
       
    });
    res.json({status:"Success"});
});


app.delete("/deleteemployee/:name", (req, res, next) => {
    var name = req.params.name;

    let query = 'DELETE from emp_data where name = "'+name+'"';
    database.query(query,(err,rows)=>{
        if(err) throw err;
    })
   
    res.send({success:true,msg:'Employee records deleted successfully'});
});


app.put("/updateemployee/:name",(req,res,next)=>{
    var name = req.params.name;
    let query = `UPDATE emp_data set name = "${req.body.name}" , designation= "${req.body.designation}" , manager = "${req.body.manager}" where name = "${name}"`;
    console.log(query);
     database.query(query,(err,rows)=>{


        if(err) throw err;
    })
   
    res.send({success:true,msg:'Employee records Updated successfully'});

});



app.listen(3000, () => {
    console.log("Server running on port 3000");
});

