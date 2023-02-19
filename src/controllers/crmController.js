/* This file will define the functions that will allow the app to get information into the endpoints and forward that data to whoever is making the request - including the MongodB (via mongoose connection) */
import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

// Create var to hold the modelController in Add a new contact to mongodb
const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = (req, res) => {
  let addNewContact = new Contact(req.body);

  addNewContact.save((err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Controller to find (GET) all contacts
export const getContacts = (req, res) => {
  Contact.find({}, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};

// Controller to find (one) specific contact from db
export const getContactWithID = (req, res) => {
  Contact.findById(req.params.contactId, (err, contact) => {
    if (err) {
      res.send(err);
    }
    res.json(contact);
  });
};
