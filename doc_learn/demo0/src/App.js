import React, { useState, useEffect } from 'react';
import './App.css';

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <div>
      <p>You clicked <span style={{'fontSize': '50px'}}>{count}</span> times</p>
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
const ChatAPI = {
  subscribeToFriendStatus(){},
  unsubscribeFromFriendStatus(){}
}
function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    console.log('useEffect');
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      console.log('unuseEffect');
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function useMindStatus() {
  const [mind, setMind] = useState(1);

  useEffect(() => {
    console.log(`mind is ${mind}`);
    return () => {
      console.log(`disconnect mind`);
    }
  })
  return [mind, setMind]
}

function TweenA() {
  const [mind, setMind] = useMindStatus();

  return (
    <div>
      mind is {mind},
      <button onClick={() => setMind(mind + 1)}>+</button>
    </div>
  )
}
function TweenB() {
  const [mind, setMind] = useMindStatus();

  return (
    <div>
      mind is {mind},
      <button onClick={() => setMind(mind-1)}>-</button>
    </div>
  )
}

function App() {
  const [isChecked, setChecked] = useState(false);

  return (
    <div className="App">
      <Example />
      <ExampleWithManyStates />
      <hr/>
      <input type='checkbox' value={isChecked} onChange={() => setChecked(!isChecked)} />
      <br></br>
      { isChecked ? <FriendStatus friend={{id: 1}} /> : null }
      <br />
      <TweenA />
      <TweenB />
    </div>
  );
}

export default App;
