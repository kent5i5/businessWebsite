import React, {Component} from 'react'
import { connect } from 'react-redux'
//import { increment, decrement, reset } from './actionCreators'


class Counter extends Component {
    

}

// Use mapStateToProps to connect counter props to redux store 
 // ... computed data from state and optionally ownProps
const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter
  }
}

// ... normally is an object full of action creators
//const mapDispatchToProps = { increment, decrement, reset }

//counter component wraps both both/single component. 
export default connect(
  mapStateToProps
  //mapDispatchToProps
)(Counter)