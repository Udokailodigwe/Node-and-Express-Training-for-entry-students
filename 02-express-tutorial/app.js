import express from "express";
const app = express();

import people from "./routes/people.js";
import auth from "./routes/auth.js";

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));
//parse json
app.use(express.json());

app.use("/api/people", people);
app.use("/login", auth);

app.listen(8000, () => {
  console.log("Server is listening on port 8000...");
});
