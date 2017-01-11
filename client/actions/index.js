let nextWombleId = 0
export const addWomble = url => {
  return {
    type: 'ADD_WOMBLE',
    id: nextWombleId++,
    url
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
