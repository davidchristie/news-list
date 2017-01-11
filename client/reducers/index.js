import { combineReducers } from 'redux'

import visibilityFilter from './visibilityFilter'
import wombles from './wombles'

export default combineReducers({
  visibilityFilter,
  wombles
})
