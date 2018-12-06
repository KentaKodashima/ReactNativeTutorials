# Albums

## Objective
This app is for learning the basic concepts and work flow of React Native.

## What I Learned
- The concepts of props, state and components.
I published an article about those topics on Medium.

Link: [https://medium.com/@KentaKodashima/react-native-component-state-and-props-4ac583b3befe](https://medium.com/@KentaKodashima/react-native-component-state-and-props-4ac583b3befe)

- How I should separate the components

**Note:**
In the course, instructor's writing `const styles` in the React way.
```
const styles = {
  
};
```
However in React Native, the format below is the correcct one because each object can have ID. Don't forget to import `StyleSheet` from 'react-native'
```
const styles = StyleSheet.create({
  
});
```
