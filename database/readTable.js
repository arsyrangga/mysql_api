const db = require("../models/config");

db.connect(function (err) {
  if (err) throw err;

  let sql = "SELECT * FROM customers";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
