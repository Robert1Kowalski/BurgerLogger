var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connnection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "hacktheplanet",
    database: "todoagain_db"
  })
}
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
