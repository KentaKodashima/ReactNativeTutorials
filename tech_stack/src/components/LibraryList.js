import React, { Component } from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
  render() {
    console.log(this.props);
    return;
  }
}

// state = global application state
const mapStateToProps = state => {
  return {
    libraries: state.libraries
  };
};
// Calls the func connect() and connect() returns (LibraryList)
// * The syntax is wierd
export default connect(mapStateToProps)(LibraryList);