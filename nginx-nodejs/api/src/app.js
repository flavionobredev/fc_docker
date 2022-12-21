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
  dbConnection.query("SELECT * FROM people", (err, result) => {
    if (err) {
      res.status(500).send("Error: " + err);
    } else {
      const resultString = `
        <h1>Full Cycle Rocks!</h1>
        <ol>
          ${result.map((person) => `<li>${person.name}</li>`).join("\n")}
        </ol>
      `;
      res.removeHeader("X-Powered-By");
      res.send(resultString);
    }
  });
});

module.exports = {
  app,
  dbConnection,
};
