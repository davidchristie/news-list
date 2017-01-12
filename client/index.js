import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { addArticle } from './actions'
import reducer from './reducers'
import App from './components/App'

const store = createStore(reducer)

store.dispatch(addArticle('http://www.nature.com/news/ancient-retroviruses-emerged-half-a-billion-years-ago-1.21274'))
store.dispatch(addArticle('https://www.theguardian.com/world/2017/jan/11/chamber-of-rats-mexico-parliaments-name-changed-in-google-maps-prank'))
store.dispatch(addArticle('https://vimeo.com/192574852'))
store.dispatch(addArticle('http://www.aljazeera.com/indepth/features/2017/01/india-love-hand-books-170108073151216.html'))

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
  )
})
