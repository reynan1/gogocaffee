const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

/* Frontend */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./frontend/views"));
/* Serve static file */
app.use("/public", express.static(path.join(__dirname, "./frontend/public")));

/* Middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
const appRoute = require("./backend/routes/app");

app.use("/", appRoute);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
