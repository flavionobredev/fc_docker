const { app, dbConnection } = require("./app");

const PORT = +process.env.PORT || 3000;

async function bootstrap() {
  dbConnection.connect((err) => {
    if (err) {
      console.error("Error connecting to database: ", err);
      process.exit(1);
    }
  });
  const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });

  GracefullShutdown.setShutdownFn(() => {
    server.close(() => {
      dbConnection.end();
    });
  });
}

class GracefullShutdown {
  static functions = [];

  static setShutdownFn(fn) {
    GracefullShutdown.functions.push(fn);
  }
  static shutdown() {
    for (const fn of GracefullShutdown.functions) {
      fn();
    }
  }
}

process.on("exit", GracefullShutdown.shutdown);
process.on("SIGTERM", GracefullShutdown.shutdown);
process.on("SIGINT", GracefullShutdown.shutdown);

bootstrap();
