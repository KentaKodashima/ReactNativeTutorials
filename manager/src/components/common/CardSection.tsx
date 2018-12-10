import React from 'react';
import { StyleSheet, View } from 'react-native';

const CardSection = (props: any) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row', // column: vertical, row: horizontal
    borderColor: '#ddd',
    position: 'relative'
  }
})

// export default CardSection;
// export as an object
export { CardSection };
