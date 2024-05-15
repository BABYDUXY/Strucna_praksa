const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "prava_ribe_jadrana",
});

// prettier-ignore
app.get("/api", (req, res) => {
  const sql = "SELECT * FROM ribe";
  db.query(sql,(err,data)=>{
    if (err) return res.json(err);
    return res.json(data);
  })

})

app.listen(5000, () => {
  console.log("server je pokrenut na portu 5000");
});
