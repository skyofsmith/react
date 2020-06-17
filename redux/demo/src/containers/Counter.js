import { connect } from 'react-redux'
import Counter from "../components/Counter";
import {add, dec} from '../actions'

const mapStateToProps = state => {
  console.log('mapStateToProps', state)
  return {
    counter: state.counter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: value => {
      dispatch(add(value))
    },
    dec: value => {
      dispatch(dec(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
