import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends React.Component {
  render() {
    const { name } = this.props.employee

    return (
      <CardSection>
        <Text>
          {name}
        </Text>
      </CardSection>
    )
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
})

export default ListItem