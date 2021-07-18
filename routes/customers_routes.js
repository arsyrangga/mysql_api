const express = require("express");
const db = require("../models/config");
const customer = express.Router();

customer.get("/customers", (req, res) => {
  let sql = "SELECT * FROM customers";
  db.query(sql, function (err, result) {
    if (err) {
      res.status(404).json({
        status: 404,
        message: "Not Found",
      });
    } else {
      res.json(result);
    }
  });
});

customer.post("/customer", (req, res) => {
  let sql = `INSERT INTO customers (name, address) 
                     VALUES (?)`;
  let values = [req.body.name, req.body.address];

  db.query(sql, [values], function (err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        status: 200,
        message: "New Customer added successfully",
      });
    }
  });
});

customer.put("/customer/:id", (req, res) => {
  let body = req.body;
  let id = req.params.id;
  let values = [body.name, body.address, id];
  let sql = `UPDATE customers
               SET name= ?, address= ?
               WHERE id= ?`;

  db.query(sql, values, function (err, result) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json({
        status: 200,
        message: "Customer Edit successfully",
      });
    }
  });
});

customer.delete("/customer/:id", (req, res) => {
  let value = [req.params.id];
  let sql = "DELETE FROM customers WHERE id=?";
  db.query(sql, value, function (err, result) {
    if (result.affectedRows < 1) {
      res.status(404).json({
        data_deleted: result.affectedRows,
      });
    } else {
      res.status(200).json({
        data_deleted: result.affectedRows,
      });
    }
  });
});

module.exports = customer;
