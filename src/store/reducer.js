const defaultState = {
  inputValue: '',
  list: []
}

const reducer = (state = defaultState, action) => {
  if (action.type === 'changeInputValue') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if (action.type === 'addTodoItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }
  if (action.type === 'deleteTodoItem') {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}

export default reducer
