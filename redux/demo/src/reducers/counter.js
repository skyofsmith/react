export default (state = 0, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'ADD':
      return state + (action.value || 0);
    case 'DEC':
      return state - (action.value || 0);
    default:
      return state
  }
}