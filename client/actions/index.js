let nextWombleId = 0
export const addWomble = name => {
  return {
    type: 'ADD_WOMBLE',
    id: nextWombleId++,
    name
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleWomble = id => {
  return {
    type: 'TOGGLE_WOMBLE',
    id
  }
}
