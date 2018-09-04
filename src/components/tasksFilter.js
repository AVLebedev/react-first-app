import React from 'react';
import groups from 'constants/groups';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, либо массив из кнопок (button или radioButton).
*/

export default class TasksFilter extends React.Component {
	constructor(props){
		super(props);
		this.checkedGroups = {props};	
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeAll = this.handleChangeAll.bind(this);

		if(this.props.changeCallback && this.props.changeCallback.type === 'function')
			this.changeCallback = this.props.changeCallback;
		else
			this.changeCallback = () => {};
	}

	handleChange(e) {
		const checkbox = e.target;
		const group = parseInt(checkbox.value);
	    checkbox.checked ? this.checkedGroups.push(group)
	    				 : this.checkedGroups.pop(group);
		this.changeCallback();
	}

	handleChangeAll(e) {
		e.checked ? this.checkAll() : this.uncheckAll();
		this.changeCallback();
	}
	checkAll = () => {
    	for(let i=0; i < groups.length; i++) {
    		if(!this.checkedGroups.includes(g.id))
    			this.checkedGroups.push(g.id);
    	}
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