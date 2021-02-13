import axios from "axios";
import {
  loadContactRequest,
  loadContactSuccess,
  loadContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./contacts-actoins";

axios.defaults.baseURL = "http://localhost:3000";

const loadContacts = () => (dispatch) => {
  dispatch(loadContactRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(loadContactSuccess(data)))
    .catch((error) => dispatch(loadContactError(error)));
};

const addContact = (text) => (dispatch) => {
  const contact = {
    name: text.name,
    number: text.number,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

export default { addContact, deleteContact, loadContacts };
