import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import articles from './articles'

export default combineReducers({
  articles,
  visibilityFilter
})
