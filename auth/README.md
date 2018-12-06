# Authentication with Firebase

## Objective
Learn how to work with Firebase authentication in React Native.

## What I Learned
- TextInput's wierd behavior that its value needs to be set by using setState() inside of onChangeText property(prop)
```
state = { email: '', password: '', error: '', loading: false };

<Input
  secureTextEntry // Pass true = just listing
  placeholder="password"
  label="Password"
  value={this.state.password}
  onChangeText={password => this.setState({ password })}
/>
```

- React Native has life-cycle methods such as componentWillMount() -> works like viewDidLoad() in Swift

- Authentication flow

In tree
```
Sign in Attempt
  ├ Success          
  └ Fail
     └ Create an Account
        ├ Success
        └ Fail
           └ Show an error
```

In code (promiss syntax)
```
// Handle authentication
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(this.onLoginSuccess.bind(this))
  .catch(() => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  });

// Observe user's login status
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    this.setState({ loggedIn: true });
  } else {
    this.setState({ loggedIn: false });
  }
});
```

- Use authentication for web instead of iOS or Android
1. Create a project on Firebase Console
2. Go to Authentication and enable Email/Password from Sign-in Method tab
3. Go to click the Web setup button at the right-top of the Authentication page
4. Copy and paste the configuration into your 