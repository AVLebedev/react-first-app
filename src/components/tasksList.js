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
		this.state = {
			checkedGroups: []
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeAll = this.handleChangeAll.bind(this);
		const groupsList = [];
		for(let g in groups) {
			groupsList.push(g);
		}
		this.groupsList = groupsList;
	}

	handleChange(e) {
		const checkbox = e.target;
		const group = parseInt(checkbox.value);

    	const checkedGroups = this.state.checkedGroups;
	    checkbox.checked ? checkedGroups.push(group)
	    				 : checkedGroups.pop(group);
		this.setState({
			checkedGroups: checkedGroups
		}); 
		console.log(this.state.checkedGroups);
	}

	handleChangeAll(e) {
		const checkbox = e.target;
		const isChecked = parseInt(checkbox.value);
	    isChecked ? this.checkAll() : this.uncheckAll();
		console.log(this.state.checkedGroups);
	}
	checkAll = () => {
    	for(let i=0; i < groups.length; i++) {
    		if(!checkedGroups.includes(g.id))
    			checkedGroups.push(g.id);
    	}
    	this.setState({
    		checkedGroups: checkedGroups //ToDo: записать короче
    	});
    }
    uncheckAll = () => {
		this.setState({
			checkedGroups: []
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
							 handleChange={this.handleChange}
							 handleChangeAll={this.handleChangeAll} />
				<div>
					{
						tasks.map((t) => {
							<Task style={tasksStyle} key={t.id} {...t} />
						})
					}
				</div>
			</div>
		);
	}
}