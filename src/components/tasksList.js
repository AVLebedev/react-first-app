import React from 'react';
import TasksFilter from 'components/tasksFilter';
import Task from 'components/task';
import TasksSorter from 'components/tasksSorter';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, 
	либо массив из кнопок (button или radioButton)
*/

export default class TasksList extends React.Component {
	deleteTask = (id) => {
		const {tasks} = this.state;
		tasks.splice(tasks.indexOf(tasks.find(t => t.id == id)), 1);
		this.setState({
			tasks
		});
	}

	constructor(props){
		super();

		this.state = {
			checkedGroups: props.groupsList.map(g => g.id)
		}

		this.updateCheckedGroups = this.updateCheckedGroups.bind(this);
		this.updateTasksList = this.updateTasksList.bind(this);
	}

	updateTasksList(newTasksList) {
		this.setState({
			tasks: newTasksList
		});
	}

	updateCheckedGroups(newCheckedGroups){
		this.setState({
			checkedGroups: newCheckedGroups
		}); 
	}

	render() {
		const tasksStyle = {marginTop:5, borderBottom:'1px solid'};
		const {tasks, groupsList, item_id} = this.props;
		const {checkedGroups} = this.state;

		return (
			<div>
				<TasksSorter tasks={tasks} sortCallback={this.updateTasksList} />
				<TasksFilter style={{marginBottom: 30}} 
							 groupsList={groupsList}
							 checkedGroups={checkedGroups} 
							 changeCallback={this.updateCheckedGroups} />
				<div>
					{
						tasks.map((t) => {
							if (item_id && t.id == item_id || !item_id)
								if (checkedGroups.includes(t.group.id))
									return <Task style={tasksStyle} key={t.id} handleDelete={this.deleteTask} {...t} />
						})
					}
				</div>
			</div>
		);
	}
}