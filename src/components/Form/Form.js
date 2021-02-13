import React, { Component } from "react";
import { connect } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
// import selectors from "../../redux/contacts/contacts-selectors";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  inputFormChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  formSubmit = (e) => {
    e.preventDefault();

    const { name, number } = this.state;

    if (name || number) {
      const duplicate = this.props.contacts.items.find(
        (contact) => contact.name === name
      );

      duplicate
        ? alert(`${this.state.name} is already in contacts.`)
        : this.props.onSubmit(this.state);

      this.setState({ name: "", number: "" });
    } else {
      alert("No field is filled");
      return;
    }
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputFormChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.inputFormChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch(contactsOperations.addContact(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
