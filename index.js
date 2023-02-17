// Import modules into script
import express from "express";

// Define const / variables to invoke in script
const app = express();
const PORT = 3000;

// Define end points
app.get("/", (req, res) => {
  res.send(`Node and express server is running on port ${PORT}`);
});

//  Define console.log msg on listening port #
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
