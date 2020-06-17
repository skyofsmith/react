import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import Counter from "../containers/Counter";

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <Counter />
  </div>
)

export default App