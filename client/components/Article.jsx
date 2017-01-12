import React, { PropTypes } from 'react'

const Article = ({url}) => {
  return (
    <div className="column">
      <div className="callout">
        <a href={url} className="embedly-card"></a>
        <p>
          Some details about the article.
        </p>
      </div>
    </div>
  )
}

Article.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired
}

export default Article
