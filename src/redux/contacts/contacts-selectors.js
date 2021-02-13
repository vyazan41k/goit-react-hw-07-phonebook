import { createSelector } from "reselect";

const getLoader = (state) => state.contacts.loading;

const getAllContacts = (state) => state.contacts.items;

const getValueFilter = (state) => state.contacts.filter;

const getFilterContacts = createSelector(
  [getAllContacts, getValueFilter],
  (contacts, filter) => {
    const normalFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalFilter)
    );
  }
);

export default {
  getLoader,
  getValueFilter,
  getFilterContacts,
  getFilterContacts,
};
