import { connect } from 'react-redux'
import { toggleWomble } from '../actions'
import Wombles from '../components/Wombles'

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

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Wombles)

export default VisibleTodoList
