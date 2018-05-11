import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { Provider } from 'react-redux';
import {store} from './store';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));