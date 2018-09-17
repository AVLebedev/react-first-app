import React from 'react';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, либо массив из кнопок (button или radioButton).
*/

export default class TasksFilter extends React.Component {
	constructor(props){
		super(props);
		this.checkedGroups = [];//props.checkedGroups;	
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeAll = this.handleChangeAll.bind(this);

		if(this.props.changeCallback && typeof this.props.changeCallback === 'function'){
			this.changeCallback = this.props.changeCallback;
		}
		else {
			this.changeCallback = () => {};
		}
	}

	handleChange(e) {
		const checkbox = e.target;
		const groupId = parseInt(checkbox.value); console.log(checkbox.checked);
	    checkbox.checked ? this.checkedGroups.push(groupId)
	    				 : this.checkedGroups.splice(this.checkedGroups.indexOf(groupId), 1);
		this.changeCallback(this.checkedGroups);
	}

	handleChangeAll(e) {
		const checkbox = e.target;
		checkbox.checked ? this.checkAll()
						 : this.uncheckAll();
		this.changeCallback(this.checkedGroups);
	}
	checkAll = () => {
		this.uncheckAll();
    	this.props.groupsList.forEach((g) => {
    		this.checkedGroups.push(g.id);	
    	});
    }
    uncheckAll = () => {
		this.checkedGroups = []
    }
    
	render() {//ToDo: заюзать transform-react-statements
		const {style, groupsList, checkedGroups} = this.props;
		return (
			<div style={style}>	
				<label style={{padding: 5, marginRight: 5, backgroundColor: 'grey'}}>
					Все
					<input type="checkbox" onChange={this.handleChangeAll} />	
				</label>
				{
					groupsList.map(g => 
						<label key={g.id} style={{padding: 5, marginRight: 5, backgroundColor: g.color}}>
							{g.desc}
							<input type="checkbox" 
								   value={g.id} 
								   checked={checkedGroups.includes(g.id)} 
								   onChange={this.handleChange} />	
						</label>
					)
				}
			</div>
		);
	}
}