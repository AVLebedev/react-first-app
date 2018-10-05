import React from 'react'
import { connect } from 'react-redux'
import { groupsList as groups } from 'constants/groups'
import TaskAddForm from 'components/taskAddForm'
import TasksList from 'components/tasksList'
// import { VisibilityFilters } from 'actions/actions'

class VisibleTasksList extends React.Component {  

  render() {
    const { tasks, groupsList } = this.props;
    const { item_id } = this.props.match.params;

    return (
       <div>
          <TaskAddForm style={{marginBottom: 30}} tasks={tasks} groupsList={groupsList} />
          <TasksList tasks={tasks} groupsList={groupsList} item_id={item_id} />
       </div>
    )
  }
}

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
    tasks: state.tasks,//, state.visibilityFilter)
    groupsList: groups
  }
}

const mapDispatchToProps = ({})//dispatch => ({
//   toggleTodo: id => dispatch(toggleTodo(id))
// })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTasksList)