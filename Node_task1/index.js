var db = require("./src/config/db");
var message = require("./util/message");
var cors = require("cors");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const { request } = require("express");

app.use(cors());
app.use(bodyParser.json());

//database connection
const conn = db.connectionDatabase();

//new api
app.post("/api/addEmployee", (req, res) => {
  message.addData(req, res, conn);
});

app.get("/api/employeeData/:id", (req, res) => {
  message.getdatabyId(req, res);
});

app.get("/api/employeeData", (req, res) => {
  message.getData(req, res, conn);
});

app.put("/api/employeeUpdate/:id", (req, res) => {
  message.putData(req, res, conn);
});

app.delete("/api/employeeDelete/:id", (req, res) => {
  message.deleteData(req, res, conn);
});

app.listen(8000, () => {
  console.log("server started  on port 8000");
});
