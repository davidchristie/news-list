import React, { PropTypes } from 'react'

const Womble = ({url }) => (
  <a href={url} className="embedly-card">Embedly</a>
)

Womble.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}

export default Womble
