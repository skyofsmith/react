import React, { useState, useEffect } from 'react';
import './App.css';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked <span style={{'font-size': '50px'}}>{count}</span> times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  return (
    <div>
      <p key={1}>
        <span>age is {age}</span>
        <button onClick={() => setAge(age+1)}>+</button>
      </p>
      <p key={2}>
        <span>fruit is {fruit}</span>
        <button onClick={() => setFruit(fruit+'1')}>+</button>
      </p>
      <p key={3}>
        <span>todos is {todos.map(s => s.text).join(',')}</span>
        <button onClick={() => setTodos(todos.concat({text: 'Learn Hooks2'}))}>+</button>
      </p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates />
    </div>
  );
}

export default App;
