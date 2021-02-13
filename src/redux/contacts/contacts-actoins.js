// import shortid from "shortid";
import { createAction } from "@reduxjs/toolkit";

export const loadContactRequest = createAction("contacts/loadContactRequest");
export const loadContactSuccess = createAction("contacts/loadContactSuccess");
export const loadContactError = createAction("contacts/loadContactError");

export const addContactRequest = createAction("contacts/addContactRequest");
export const addContactSuccess = createAction("contacts/addContactSuccess");
export const addContactError = createAction("contacts/addContactError");

export const deleteContactRequest = createAction(
  "contacts/deleteContactRequest"
);
export const deleteContactSuccess = createAction(
  "contacts/deleteContactSuccess"
);
export const deleteContactError = createAction("contacts/deleteContactError");

export const filterContacts = createAction("contacts/filter");
