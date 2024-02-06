// create server and listen on port 4200
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

// create express app
const app = express();

// user cors middleware
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// public direction for static files
app.use(express.static("public"));

// routes
app.use("/api/devices", require("./routes/devices"));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
