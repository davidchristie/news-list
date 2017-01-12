import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../actions'

let AddArticle = ({ dispatch }) => {

  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addArticle(input.value))
        input.value = ''
      }}>
        <ul className="menu">
          <li>
            <input type="url" ref={node => {
              input = node
            }} />
          </li>
          <li>
            <button type="submit" className="button">
              POST
            </button>
          </li>
        </ul>
      </form>
    </div>
  )
}
AddArticle = connect()(AddArticle)

AddArticle.propTypes = {
  dispatch: PropTypes.func
}

export default AddArticle
