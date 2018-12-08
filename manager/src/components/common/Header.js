// import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// make a component
// props = should be passed something in App(index.js)
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      {/* props named headerText */}
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 88,
    paddingTop: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

// make the component available to other parts of the app
// export default Header;
// export as an object
export { Header };