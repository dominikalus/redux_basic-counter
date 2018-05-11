import React from 'react';
import { connect } from 'react-redux';
import {increment, decrement} from './actions';

class Counter extends React.Component {

  render() {

  console.log(this.props);
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.props.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.props.increment}>+</button>
        </div>
      </div>
    )
  }
}

/* Add this function:
The object you return from mapStateToProps gets fed into your component as props.
the keys in the object become prop names, and their corresponding values become the props’ */
const mapStateToProps = (state) => {
  return {
    count: state.count
  };
}
// Then replace this:
// export default Counter;

// With this:
export default connect(mapStateToProps, {increment,decrement})(Counter);