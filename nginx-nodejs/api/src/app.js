const app = require("express")();

app.get("/", (req, res) => {
  res.removeHeader("X-Powered-By");
  res.send("<h1>Full Cycle Rocks!</h1>");
});

module.exports = {
  app,
};
