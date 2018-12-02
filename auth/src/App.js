import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import { REACT_APP_FB_API_KEY, REACT_APP_FB_AUTH_DOMAIN, REACT_APP_FB_DB_URL, REACT_APP_FB_PROJECT_ID, REACT_APP_FB_STORAGE_BUCKET, REACT_APP_FB_MESSAGING_SENDER_ID } from 'react-native-dotenv';

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: REACT_APP_FB_API_KEY,
      authDomain: REACT_APP_FB_AUTH_DOMAIN,
      databaseURL: REACT_APP_FB_DB_URL,
      projectId: REACT_APP_FB_PROJECT_ID,
      storageBucket: REACT_APP_FB_STORAGE_BUCKET,
      messagingSenderId: REACT_APP_FB_MESSAGING_SENDER_ID
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
