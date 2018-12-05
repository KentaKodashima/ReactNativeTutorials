import React, { Component } from 'react';
import { FlatList } from 'react-native'; 
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={library => library.id}
      />
    );
  }
}

// state = global application state
const mapStateToProps = state => {
  return { libraries: state.libraries };
};
// Calls the func connect() and connect() returns (LibraryList)
// * The syntax is wierd
export default connect(mapStateToProps)(LibraryList);