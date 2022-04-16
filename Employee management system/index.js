// const { query } = require("express");
var mysql = require("mysql");
var express = require("express");
// const res = require("express/lib/response");
var app = express();
var port = process.env.PORT || 3000;
var responseStr = "MySQL Data:";

app.get('/',function(req,res){
   
   var mysqlHost = process.env.MYSQL_HOST || 'localhost';
   var mysqlPort = process.env.MYSQL_PORT || 3306;
   var mysqlUser = process.env.MYSQL_USER || 'root';
   var mysqlPass = process.env.MYSQL_PASS || '';
   var mysqlDB   = process.env.MYSQL_DB   || 'my_db';

   var connectionOptions = {
     host: mysqlHost,
     port: mysqlPort,
     user: mysqlUser,
     password: mysqlPass,
     database: mysqlDB
   };

   console.log('MySQL Connection config:');
   console.log(connectionOptions);

   var connection = mysql.createConnection(connectionOptions);
   // var queryStr = SELECT * FROM `moe_item_t`;
   
   connection.connect();
   console.log("hello");
   connection.query('SELECT * from moe_item_t', function (error, results, fields) {
     if (error) throw error;
     console.log("display");
     responseStr = '';

     results.forEach(function(data){
        responseStr += data.ITEM_NAME + ' : ';
        console.log(data);
     });

     if(responseStr.length == 0)
        responseStr = 'No records found';

     console.log(responseStr);

     res.status(200).send(responseStr);
   });
    
   connection.end();
});


app.listen(port, function(){
    console.log('Sample mySQL app listening on port ' + port);
});











// const fs = require('fs');
// const path = require('path');
// const { Z_ERRNO } = require("zlib");
// const database = require('./conn');


// app.use(express.json()); 

// app.get("/getemployeelist", (req, res, next) => {
//     let query = "select * from emp_data";
//     list = {};
//    database.query(query,function(err,result,fields){
//        if (err) throw err ;
//     res.json(result);
//     console.log(result);
//    });
//   // res.json(list);
// });


// app.get("/getemployee/:name", (req, res, next) => {
//     var name = req.params.name;
//     console.log(name);
//     let query = "select * from emp_data where name=?";
//     database.query(query,[name],function(err,result,name){
//         if(err) throw err ;
//         res.json(result);
//     })
// });

// app.post("/saveemployee",(req,res,next)=>{
//     var employee = req.body;

//     let query =  'insert into emp_data(name,designation,manager) values(?,?,?)';
//     let name = employee.name;
//     let designation = employee.designation;
//     let manager = employee.manager;
  
//     // Creating queries
//     database.query(query, [name,designation,manager], (err, rows) => {
//         if (err) throw err;
       
//     });
//     res.json({status:"Success"});
// });


// app.delete("/deleteemployee/:name", (req, res, next) => {
//     var name = req.params.name;

//     let query = 'DELETE from emp_data where name = "'+name+'"';
//     database.query(query,(err,rows)=>{
//         if(err) throw err;
//     })
   
//     res.send({success:true,msg:'Employee records deleted successfully'});
// });


// app.put("/updateemployee/:name",(req,res,next)=>{
//     var name = req.params.name;
//     let query = `UPDATE emp_data set name = "${req.body.name}" , designation= "${req.body.designation}" , manager = "${req.body.manager}" where name = "${name}"`;
//     console.log(query);
//      database.query(query,(err,rows)=>{


//         if(err) throw err;
//     })
   
//     res.send({success:true,msg:'Employee records Updated successfully'});

// });



// app.listen(port, function() {
//     console.log('Server running on port' + port);
// });

