var db = require("../src/config/db");
const conn = db.connectionDatabase();
var message = require("./message");


class Constants {
  constructor() {
    this.addEmpQuery = "INSERT INTO emp SET ?";
  }
  insertQuery(sql, data) {
    conn.query(sql, data, (err, result) => {
      if (err) throw err;
      return "Record Added";
    });
  }

  getDataConstants(limit, filter, offset) {
    let sql, countSql;
    if (filter == null || filter == "") {
      sql = `SELECT * FROM emp LIMIT  ${offset}, ${limit}`;
      countSql = "SELECT count(*) as count FROM emp";
    } else {
      let sqlValue = ` FROM emp WHERE empname like '${filter}%' 
            or cast(id as char(10))='${filter}' or gender like '${filter}%' or
            cast(birthdate as char(20)) like '${filter}%' or address like '${filter}%' 
            or cast(mobile as char(10)) like '${filter}%' or email like '${filter}%'
            or company like '${filter}%'`;

      sql = "SELECT * " + sqlValue + `LIMIT ${offset},${limit}`;
      countSql = "SELECT count(*) as count " + sqlValue;
    }
    return { sql: sql, countSql: countSql };
  }
}

class Constantdata {
  constructor() {
   
  }
  getdatabyIdQuery(sql) {
    conn.query(sql, (err, result) => {
      if (err) throw err;
      return "employee record";
    });
  }

  putbyIdQuery(req){
    return "UPDATE emp SET empname='"+
    req.body.empname +
    "', gender='" +
    req.body.gender +
    "', birthdate='" +
    req.body.birthdate +
    "', address='" +
    req.body.address +
    "', mobile='" +
    req.body.mobile +
    "',email='" +
    req.body.email +
    "',company='" +
    req.body.company +
    "' WHERE id=" +
    req.params.id;

  }
  putDataQuery(sql) {
    conn.query(sql, (err, result) => {
      if (err) throw err;
      return "Record updated successfully";
    });
  }

  deleteDataQuery(sql) {
    conn.query(sql, (err, result) => {
      if (err) throw err;
      return "Record deleted successfully";
    });
  }
}

module.exports ={ Constants: Constants, Constantdata: Constantdata};
