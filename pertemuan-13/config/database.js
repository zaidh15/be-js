const mysql = require("mysql");

require("dotenv").config();

// const { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_DATABASE } = process.env;

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) {
      console.log("Error connecting " + err.stack);
      return;
    } else {
      console.log("Connected to database");
      return;
    }
  });
  
  module.exports = db;