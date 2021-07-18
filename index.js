const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const db = require("./models/config");
const customer = require("./routes/customers_routes");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "100mb" }));

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api", customer);

app.listen(8000, () => {
  console.log(`Example app listening at http://localhost:${8000}`);
});
