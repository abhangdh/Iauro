const cons = require("./const");
var constants = new cons.Constants();
var constantdata = new cons.Constantdata();
function successResponse(message) {
  return JSON.stringify({
    status: 200,
    error: null,
    response: message,
  });
}

function addData(req, res, conn) {
  let data = {
    empname: req.body.empname,
    gender: req.body.gender,
    birthdate: req.body.birthdate,
    address: req.body.address,
    mobile: req.body.mobile,
    email: req.body.email,
    company: req.body.company,
  };
  let sql = constants.addEmpQuery;
  res.send(successResponse(constants.insertQuery(sql, data)));
}

function getdatabyId(req, res) {
  let sql = "SELECT * FROM emp WHERE id=" + req.params.id;
  res.send(successResponse(constantdata.getDatabyIdQuery(sql)));
}

function getData(req, res, conn) {
  let offset = req.query.pagesize * req.query.pageNo;
  let limit = req.query.pagesize;
  let filter = req.query.filter;
  let data = constants.getDataConstants(limit, filter, offset);
  let sql = data.sql,
    countSql = data.countSql;
  let totalCount;
  conn.query(countSql, (err, result) => {
    totalCount = result;
  });
  let query = conn.query(sql, (err, result) => {
    if (err) throw err;
    res.send(
      JSON.stringify({
        status: 200,
        error: null,
        response: result,
        totalcount: totalCount,
      })
    );
  });
}

function putData(req, res, conn) {
  let sql = constantdata.putbyIdQuery(req);
  res.send(successResponse(constantdata.putDataQuery(sql)));
}

function deleteData(req, res, conn) {
  let sql = "DELETE from emp WHERE id=" + req.params.id;
  res.send(successResponse(constantdata.deleteDataQuery(sql)));
}

module.exports = {
  successResponse,
  addData,
  getdatabyId,
  getData,
  putData,
  deleteData,
};
