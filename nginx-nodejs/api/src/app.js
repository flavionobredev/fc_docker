const app = require("express")();

app.get("/", (req, res) => {
  res.removeHeader("X-Powered-By");
  res.send("Hello World!");
});

module.exports = {
  app,
};
