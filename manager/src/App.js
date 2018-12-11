import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import LoginForm from './components/LoginForm'

import keys from './keys'

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: keys.apiKey,
      authDomain: keys.authDomain,
      databaseURL: keys.databaseURL,
      projectId: keys.projectId,
      storageBucket: keys.storageBucket,
      messagingSenderId: keys.messagingSenderId
    }

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App