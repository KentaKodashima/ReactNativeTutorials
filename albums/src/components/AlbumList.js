import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// ES6 class 
class AlbumList extends Component {

  // class propeties
  // state = ... -> for initializing
  // state.setState -> for modification
  state = { albums: [] }; // this.state = empty album

  componentWillMount() {
    // { albums: response.data } -> passing an object
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(album => 
      // name of props is arbitrary
      // passing down the props to use it in AlbumDetail.js || props.key props.album
      <AlbumDetail key={album.title} album={album} />
    );
  }

  // render -> return some amount of JSX
  render() {
    console.log(this.state);

    return (
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

export default AlbumList;
