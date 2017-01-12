import { connect } from 'react-redux'
import { toggleArticle } from '../actions'
import Articles from '../components/Articles'

const getVisibleArticles = (articles, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return articles
  case 'SHOW_COMPLETED':
    return articles.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return articles.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    articles: getVisibleArticles(state.articles, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onArticleClick: id => {
      dispatch(toggleArticle(id))
    }
  }
}

const VisibleArticles = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)

export default VisibleArticles
