/*
This file handles all endpoints for the app
*/

// import from modules
import {
  addNewContact,
  getContacts,
  getContactWithID,
} from "../controllers/crmController";

// Create functions for GET POST PUT DELETE
const routes = (app) => {
  // GET all contact
  app
    .route("/contact")
    .get((req, res, next) => {
      // Middleware example to demonstrate in code
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request type: ${req.method}`);
      next();
    }, getContacts)

    // POST a new contact
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    // GET a specific contact
    .get(getContactWithID)

    .put((req, res) => res.send("PUT request successful!"))

    .delete((req, res) => res.send("DELETE request successful!"));
};

// Set Module export name
export default routes;
