import React, { PropTypes } from 'react'
import Article from './Article'

const Articles = ({ wombles, onWombleClick }) => (
  <ul>
    {wombles.reverse().map(womble =>
      <Article
        key={womble.id}
        {...womble}
        onClick={() => onWombleClick(womble.id)}
      />
    )}
  </ul>
)

Articles.propTypes = {
  wombles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onWombleClick: PropTypes.func.isRequired
}

export default Articles
