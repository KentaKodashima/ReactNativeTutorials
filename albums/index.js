// Import a library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';


// create a component
const App = () => (
  // Only one top level component is allowed
  // flex: 1 => expand the component to fill the entire content area of the device
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

// render it to the device
AppRegistry.registerComponent('albums', () => App);
