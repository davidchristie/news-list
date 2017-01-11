import React, { PropTypes } from 'react'

const Womble = ({ onClick, completed, name }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {name}
  </li>
)

Womble.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired
}

export default Womble
