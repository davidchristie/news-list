import React from 'react'
import Footer from './Footer'
import AddWomble from '../containers/AddWomble'
import VisibleWombles from '../containers/VisibleWombles'

const App = () => (
  <div>
    <AddWomble />
    <VisibleWombles />
    <Footer />
  </div>
)

export default App
