import { connect } from 'react-redux'
import { toggleWomble } from '../actions'
import Articles from '../components/Articles'

const getVisibleWombles = (wombles, filter) => {
  switch (filter) {
  case 'SHOW_ALL':
    return wombles
  case 'SHOW_COMPLETED':
    return wombles.filter(t => t.completed)
  case 'SHOW_ACTIVE':
    return wombles.filter(t => !t.completed)
  }
}

const mapStateToProps = state => {
  return {
    wombles: getVisibleWombles(state.wombles, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onWombleClick: id => {
      dispatch(toggleWomble(id))
    }
  }
}

const VisibleArticles = connect(
  mapStateToProps,
  mapDispatchToProps
)(Articles)

export default VisibleArticles
