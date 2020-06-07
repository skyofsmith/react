import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
function App() {
  const welcomeComp = <Welcome name='tom'></Welcome>
  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <Welcome name='sam'></Welcome>
      {welcomeComp}
      <Clock />
      <Clock />
      <Clock />
    </div>
  );
}

export default App;
