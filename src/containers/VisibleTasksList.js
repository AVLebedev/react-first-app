import { connect } from 'react-redux'
import tasksList from 'components/tasksList'
import groups from 'constants/groups'
// import { VisibilityFilters } from 'actions/actions'

const getVisibleTasks = (tasks/*, filter*/) => {
  return tasks
  // switch (filter) {
  //   case VisibilityFilters.SHOW_ALL:
  //     return todos
  //   case VisibilityFilters.SHOW_COMPLETED:
  //     return todos.filter(t => t.completed)
  //   case VisibilityFilters.SHOW_ACTIVE:
  //     return todos.filter(t => !t.completed)
  //   default:
  //     throw new Error('Unknown filter: ' + filter)
  // }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks//, state.visibilityFilter)
  }
}

const mapDispatchToProps = ({})//dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tasksList)