const db = require("../models/config");

db.connect(function (err) {
  if (err) throw err;

  let sql = "DROP TABLE customers";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
