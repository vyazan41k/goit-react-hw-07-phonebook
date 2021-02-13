import { combineReducers } from "redux";
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
  filterContacts,
} from "./contacts-actoins";
import { createReducer } from "@reduxjs/toolkit";

const items = createReducer([], {
  [loadContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  [loadContactRequest]: () => true,
  [loadContactSuccess]: () => false,
  [loadContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading,
});
