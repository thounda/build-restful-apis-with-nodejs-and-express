// Import modules into s"cript
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./src/routes/crmRoutes";

// Define const / variables to invoke functions in script
const app = express();
const PORT = 3000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://localhost/CRMdb", {
  useNewUrlParser: true,
});

// bodyparser setup for communication between db and the Express server
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server static files
app.use(express.static("public"));

// Pass the app into the 'routes' module
routes(app);

// Define end points
app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

//  Define console.log msg on listening port #
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
