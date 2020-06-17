import React, {useState} from "react"
import PropTypes from 'prop-types'

const Counter = ({counter, add, dec}) => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <div>{counter}</div>
      <input type="number" value={value} onChange={e => {
        console.log(e, e.target, e.target.value)
        setValue(+e.target.value || 0)
      }}/>
      <br/>
      <button onClick={() => add(value)}>+</button>
      <button onClick={() => dec(value)}>-</button>
    </div>
  )
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  add: PropTypes.func.isRequired,
  dec: PropTypes.func.isRequired
}

export default Counter