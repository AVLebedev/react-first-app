import React from 'react';
import TasksFilter from 'components/tasksFilter';
import Task from 'components/task';
import groups from 'constants/groups';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, 
	либо массив из кнопок (button или radioButton)
*/

export default class TasksList extends React.Component {
	constructor(){
		super();
		
		const groupsList = [];
		for(let g in groups) {
			groupsList.push(groups[g]);
		}
		this.groupsList = groupsList;

		this.state = {
			checkedGroups: this.groupsList.map(g => g.id)
		}

		this.updateCheckedGroups = this.updateCheckedGroups.bind(this);
	}

	updateCheckedGroups(newCheckedGroups){
		this.setState({
			checkedGroups: newCheckedGroups
		}); 
	}

	render() {
		const {tasks} = this.props;
		const tasksStyle = {marginTop:5, borderBottom:'1px solid'};
		const {checkedGroups} = this.state;
		return (
			<div>
				<TasksFilter style={{marginBottom: 50}} 
							 groupsList={this.groupsList}
							 checkedGroups={checkedGroups} 
							 changeCallback={this.updateCheckedGroups} />
				<div>
					{
						tasks.map((t) => {
							if(checkedGroups.includes(t.group.id))
								return <Task style={tasksStyle} key={t.id} {...t} />
						}
						)
					}
				</div>
			</div>
		);
	}
}