import React from 'react';
import TasksFilter from 'components/tasksFilter';
import Task from 'components/task';
import TasksForm from 'components/tasksForm';
import groups from 'constants/groups';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, 
	либо массив из кнопок (button или radioButton)
*/

export default class TasksList extends React.Component {
	initTasks = () => {
		return [
			{
				id: 1,
				name: "Задача №1",
				description: "Реализовать счётчик",
				group: groups.done
			},
			{
				id: 2,
				name: "Задача №2",
				description: "Список ToDo: минимальная реализация",
				group: groups.inProgress
			},
			{
				id: 3,
				name: "Задача №3",
				description: "Список ToDo: дополнительный функционал",
				group: groups.todo
			},
			{
				id: 4,
				name: "Задача №4",
				description: "Список ToDo: уровень - бог",
				group: groups.todo
			}
		];
	}	

	constructor(){
		super();

		const groupsList = [];
		for(let g in groups) {
			groupsList.push(groups[g]);
		}
		this.groupsList = groupsList;

		this.state = {
			checkedGroups: this.groupsList.map(g => g.id),
			tasks: this.initTasks()
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
		// const {tasks} = this.props;
		const tasksStyle = {marginTop:5, borderBottom:'1px solid'};
		const {checkedGroups, tasks} = this.state;
		return (
			<div>
				<TasksForm style={{marginBottom: 30}} 
						   groupsList={this.groupsList}
						   tasks={tasks}
						   submitCallback={this.updateTasksList} />
				<TasksFilter style={{marginBottom: 30}} 
							 groupsList={this.groupsList}
							 checkedGroups={checkedGroups} 
							 changeCallback={this.updateCheckedGroups} />
				<div>
					{
						tasks.map((t) => {
							if(checkedGroups.includes(t.group.id))
								return <Task style={tasksStyle} key={t.id} {...t} />
						})
					}
				</div>
			</div>
		);
	}
}