import React from "react";
import { connect } from "react-redux";
import { filterContacts } from "../../redux/contacts/contacts-actoins";
import selectors from "../../redux/contacts/contacts-selectors";

const Filter = ({ value, onChange }) => {
  return (
    <div>
      <h2>Find contacts by name</h2>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  value: selectors.getValueFilter(state),
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterContacts(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
