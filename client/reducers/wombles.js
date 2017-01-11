const womble = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_WOMBLE':
    return {
      id: action.id,
      name: action.name,
      completed: false
    }
  case 'TOGGLE_WOMBLE':
    if (state.id !== action.id) {
      return state
    }

    return Object.assign({}, state, {
      completed: !state.completed
    })

  default:
    return state
  }
}

const wombles = (state = [], action) => {
  switch (action.type) {
  case 'ADD_WOMBLE':
    return [
      ...state,
      womble(null, action)
    ]
  case 'TOGGLE_WOMBLE':
    return state.map(t =>
      womble(t, action)
    )
  default:
    return state
  }
}

export default wombles
