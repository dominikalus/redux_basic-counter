import React from 'react';
import * as actions from './actions';

const initialState = {
  count:0
}; 

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