import React from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import selectors from "../../redux/contacts/contacts-selectors";

const ContactsList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  contacts: selectors.getFilterContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
