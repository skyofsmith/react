let nextTodoId = 0
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const add = value => {
  console.log('reducer add', value)
  return {
    type: 'ADD',
    value
  }
}
export const dec = value => {
  console.log('reducer dec', value)
  return {
    type: 'DEC',
    value
  }
}