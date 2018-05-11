import React from 'react';
import initialState from './initialState';
import * as actions from './actions';

function reducer(state = initialState, action){
    console.log(action);
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      default:
        return state;
    }
  }

  export default reducer;