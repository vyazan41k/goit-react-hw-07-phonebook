import React, { Component } from "react";
import { connect } from "react-redux";
import PulseLoader from "react-spinners/PulseLoader";

import Form from "./components/Form";
import Filter from "./components/Filter";
import ContactsList from "./components/ContactsList";
import contactsOperations from "./redux/contacts/contacts-operations";
import selectors from "./redux/contacts/contacts-selectors";

class App extends Component {
  componentDidMount() {
    this.props.loadContacts();
  }
  render() {
    return (
      <div>
        <h3>Phonebook</h3>
        <Form />
        <h3>Contacts</h3>
        <Filter />

        {this.props.loader ? (
          <PulseLoader size={15} color={"#36D7B7"} margin={5} />
        ) : (
          <ContactsList />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: selectors.getLoader(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadContacts: () => dispatch(contactsOperations.loadContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
