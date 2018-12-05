import React, { Component } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
// Take all actions from '../Action' and assign it to the variable called 'actions'
import * as actions from '../Actions';

class ListItem extends Component {
  renderDescription() {
    const { library, selectedLibraryId } = this.props;

    if (library.item.id === selectedLibraryId) {
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }

  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;
    console.log(this.props.library)
    return (
      <TouchableWithoutFeedback 
        onPress={() => this.props.selectedLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapsStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId };
};

// 1: mapsStateToProps
// 2: Something to bind to this component
// Modify the props of this component
export default connect(mapsStateToProps, actions)(ListItem);