import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addWomble } from './actions'
import reducer from './reducers'
import App from './components/App'

let store = createStore(reducer)

store.dispatch(addWomble('https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'))
store.dispatch(addWomble('http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'))

// console.log('getState:', store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
