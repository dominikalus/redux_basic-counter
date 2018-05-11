import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

//'store.dispatch({type: "INCREMENT"});
// store.dispatch({type: "DECREMENT"});

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));