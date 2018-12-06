# Tech Stack

## Overview
The main purpose of making this app is to learn how to use Redux with React Native.
1. Figure out what Redux is and how to apply to the app
2. Figure out a way to render a list of elements in a performant manner (long lists of data on mobile devices are notorious for griding applications to a halt)
3. Figure out animations

## What I Learned

### Action
An plain JavaScript object that tells the reducer how to modify its data. So, Actions are used to tell reducers to update or change in a very specific action. We need to define how reducers should update by implementing Actions.
**It must have `type` property.**

### Store
An object that holds the application's data. It has a reference to the reducer and state.

### Reducer
A function that produces some amount of data. So, it returns some data.

### State
Data for our app to use. All the data that the application is using (inputs, auth status, pictures, etc).

#### Example
Action:
Turn 'abcd' into an array of characters

Reducer:
If the action's type is 'split', it will take a string of characters and turn it into an array.

State:
['a', 'b', 'c', 'd']

### Provider
Facilitating communnication between React and Redux. Provider is what connects to all those different connect tags. It makes sure that all those connect tags can get access to the store, grab our redux state and then pass it off to indivisual components.
A store with `createStore()` needs to be passed into the Provider tag.

### mapStateToProps
Our ability to interface from our application level state down to the component level. Plucking properties off our state object and injecting them into our components.

### Connect helper
Connect helper is a feature of react-redux library. It is a glue of React and Redux. It is a tool to explicitly connect Components to the Redux Store to get State from Redux.

1st argument: mapsStateToProps

2nd argument: Something to bind to this component

Modify the props of the component

### Action Creator
Action Creator is a JavaScript function that creates an Action.