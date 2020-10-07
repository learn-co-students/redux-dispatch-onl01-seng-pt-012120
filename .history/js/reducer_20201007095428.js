let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 }
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action)
  return state
}

dispatch({ type: 'INCREASE_COUNT' })
// => {count: 1}
dispatch({ type: 'INCREASE_COUNT' })
// => {count: 2}
dispatch({ type: 'INCREASE_COUNT' })
  // => {count: 3}