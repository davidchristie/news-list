import React, { PropTypes } from 'react'
import Womble from './Womble'

const Wombles = ({ wombles, onWombleClick }) => (
  <ul>
    {wombles.map(womble =>
      <Womble
        key={womble.id}
        {...womble}
        onClick={() => onWombleClick(womble.id)}
      />
    )}
  </ul>
)

Wombles.propTypes = {
  wombles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onWombleClick: PropTypes.func.isRequired
}

export default Wombles
