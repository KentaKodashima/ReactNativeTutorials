# Manager

## Overview
The main purpose of this app is to build a complex app using Redux and Navigation bar.

## Covered Skills
- Navigation
- Redux
- Authentication

## What I Learned
### Login Flow with Redux
User types something

-> Call Action Creator with the text

-> Action Creator returns an action

-> Action sent to all reducers

-> Reducer calculates new app state

-> State sent to all components

-> Components re-render with new state

### Asyncronous Action Creator

### Redux Thunk
> Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests. - [Redux Thunk Github](https://github.com/reduxjs/redux-thunk)

#### Default Action Creator Rules
 - Action creators are functions
 - Must return an action
 - An action is an object with a 'type' property

#### Action Creator Rules with Redux Thunk
 - Action creators are functions
 - Must return a function
 - This function will be called with 'dispatch'

### Tips to use when I code
- types.js: Contains const of action.type names to avoid typos