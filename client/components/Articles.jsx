import React, { PropTypes } from 'react'
import Article from './Article'

const Articles = ({ articles, onArticleClick }) => (
  <div className="row small-up-1 medium-up-2 large-up-3">
    {articles.reverse().map(article =>
      <Article
        key={article.id}
        {...article}
        onClick={() => onArticleClick(article.id)}
      />
    )}
  </div>
)

Articles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onArticleClick: PropTypes.func.isRequired
}

export default Articles
