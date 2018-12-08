import React, { Component } from 'react'
import { connect } from 'react-redux'
import { emailChanged } from '../actions'
import { Card, CardSection, Input, Button } from './common'

class LoginForm extends Component {
  onEmailChange(text) {
    // Create an action using 'emailChanged' action creator
    this.props.emailChanged(text)
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input 
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input 
            secureTextEntry
            label="Password"
            placeholder="password"
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
// 2nd : action creator 
// Bind 'emailChanged' action creator to this componet
export default connect(null, { emailChanged })(LoginForm)