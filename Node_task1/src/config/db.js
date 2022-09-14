const mysql = require("mysql");
function connectionDatabase(){
    const conn= mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "employee",
      });
      conn.connect((err) => {
        if (err) throw err;
        console.log("Mysql Connected successfully");
      });
      return conn;
}
module.exports ={
    connectionDatabase
}

  