import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addWomble } from '../actions'

let AddWomble = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addWomble(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Womble
        </button>
      </form>
    </div>
  )
}
AddWomble = connect()(AddWomble)

AddWomble.propTypes = {
  dispatch: PropTypes.func
}

export default AddWomble
