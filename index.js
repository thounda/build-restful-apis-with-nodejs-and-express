// Import modules into s"cript
import express from "express";
import routes from "./src/routes/crmRoutes";

// Define const / variables to invoke functions in script
const app = express();
const PORT = 3000;

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
