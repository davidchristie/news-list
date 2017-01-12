let nextArticleId = 0

export const addArticle = url => {
  return {
    type: 'ADD_ARTICLE',
    id: nextArticleId++,
    url
  }
}

export const setVisibilityFilter = filter => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleArticle = id => {
  return {
    type: 'TOGGLE_ARTICLE',
    id
  }
}
