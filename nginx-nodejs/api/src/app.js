const app = require("express")();
const mysql = require("mysql");

const dbConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: +process.env.MYSQL_PORT,
});

app.get("/", (req, res) => {
  res.removeHeader("X-Powered-By");
  res.send("<h1>Full Cycle Rocks!</h1>");
});

app.get("/users/add-random", (req, res) => {
  const name = Math.random().toString(36).substring(7);
  const sql = `INSERT INTO people(name) VALUES ('${name}')`;
  dbConnection.query(sql, (err, result) => {
    if (err) {
      console.log(err)
      res.status(500).send("Error inserting user");
    } else {
      res.send(`User ${name} inserted`);
    }
  });
});

module.exports = {
  app,
  dbConnection,
};
