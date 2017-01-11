import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addWomble } from './actions'
import reducer from './reducers'
import App from './components/App'

let store = createStore(reducer)

store.dispatch(addWomble('Alice'))
store.dispatch(addWomble('Bob'))
store.dispatch(addWomble('Claire'))
store.dispatch(addWomble('Dave'))

// console.log('getState:', store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
