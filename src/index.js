require("dotenv").config();

const express = require("express");
const PORT = 8080;
const app = express();
const mongoose = require("mongoose");

// connect to dDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", e => console.log(e));
db.once("open", () => console.log("Connected to DB!"));

app.use(express.json());

const routes = require("./routes/routes");
app.use("/", routes);

app.listen(PORT, () => console.log(`Server listening on port:${PORT}`));
