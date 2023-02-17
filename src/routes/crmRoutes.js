/*
This file handles all endpoints for the app
*/

// Create functions for GET POST PUT DELETE
const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => res.send("GET request successful"))

    .post((req, res) => res.send("POST request successfull"));

  app
    .route("/contact/:contactID")
    .put((req, res) => res.send("PUT request successful!"))

    .delete((req, res) => res.send("DELETE request successful!"));
};

// Set Module export name
export default routes;
