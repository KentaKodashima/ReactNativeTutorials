import _ from 'lodash'
import React, { Component } from 'React'
import { connect } from "react-redux";
import { 
  StyleSheet, 
  FlatList, 
  View, 
  Text, 
  TouchableOpacity 
} from 'react-native'
import { employeesFetch } from '../actions'

class EmployeeList extends React.Component {
  componentWillMount() {
    this.props.employeesFetch()
  }

  componentDidMount() {
    console.log(this.props)
  }

  _listItemRenderer = (item: string) => {
    const { listItemStyle, listItemTextStyle } = styles
    return (
      <TouchableOpacity onPress={console.log(item)}>
        <View style={listItemStyle}>
          <Text style={listItemTextStyle}>{item}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <FlatList 
        data={this.props.employees}
        renderItem={({ item }) => this._listItemRenderer(item.name)}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  todoTextStyle: {
    width: '90%',
    marginTop: 16,
    marginBottom: 16,
    borderBottomWidth: 2,
    fontSize: 18,
    justifyContent: 'center'
  },
  listStyle: {
    width: '100%',
    flex: 1
  },
  listItemStyle: {
    backgroundColor: '#4286f4',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0'
  },
  listItemTextStyle: {
    color: 'white',
    fontSize: 20
  }
})

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return { ...val, uid }
  })

  return { employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList)