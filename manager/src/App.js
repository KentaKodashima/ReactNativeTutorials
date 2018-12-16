import React, { Component } from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import firebase from 'firebase'
import ReduxThunk from 'redux-thunk'
import LoginForm from './components/LoginForm'
import Router from './Router'

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
    // 1st: reducers
    // 2nd: Any initial state we might want to pass to our Redux app. Pre-population
    // 3rd: Store enhancer, adding additional functionality to the store
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <SafeAreaView>
          <Router />
        </SafeAreaView>
      </Provider>
    )
  }
}

export default App