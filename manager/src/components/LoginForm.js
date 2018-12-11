import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged, passwordChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    // Create an action using 'emailChanged' action creator
    this.props.emailChanged(text)
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button 
            title="Login"
          />
        </CardSection>
      </Card>
    )
  }
}

// 1st : mapStateToProps
const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
  }
}

// 2nd : action creator 
// Bind 'emailChanged' action creator to this componet
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm)