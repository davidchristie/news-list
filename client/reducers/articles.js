const article = (state = {}, action) => {
  switch (action.type) {
  case 'ADD_ARTICLE':
    return {
      id: action.id,
      url: action.url,
      completed: false
    }
  case 'TOGGLE_ARTICLE':
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

const articles = (state = [], action) => {
  switch (action.type) {
  case 'ADD_ARTICLE':
    return [
      ...state,
      article(null, action)
    ]
  case 'TOGGLE_ARTICLE':
    return state.map(t =>
      article(t, action)
    )
  default:
    return state
  }
}

export default articles
