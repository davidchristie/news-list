import React from 'react'

import AddWomble from '../containers/AddArticle'

export default () => (
  <header>
    <div className="top-bar">

      <div className="top-bar-left">
        <ul className="menu">
          <li><a href="#">One</a></li>
          <li><a href="#">Two</a></li>
          <li><a href="#">Three</a></li>
          <li><a href="#">Four</a></li>
        </ul>
      </div>

      <div className="top-bar-right">
        <AddWomble />
      </div>

    </div>
  </header>
)

/*
<div className="top-bar-right">
  <ul className="menu">
    <li><input type="url" /></li>
    <li><button type="button" className="button">Search</button></li>
  </ul>
</div>
*/
