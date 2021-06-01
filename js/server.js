const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.get("/data", (req, res) => {
  res.json({ name: "ibrahim" });
});

app.listen(3000);
