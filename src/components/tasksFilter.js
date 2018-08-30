import React from 'react';
import groups from 'constants/groups';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, либо массив из кнопок (button или radioButton).
*/

export default class TasksFilter extends React.Component {
	render() {//ToDo: заюзать transform-react-statements
		const groupsList = [];
		for(let g in groups){ 
			groupsList.push(groups[g]);
		}
		
		const {style} = this.props;
		return (
			<div style={style}>
				{
					groupsList.map(g => 
						<label key={g.name} style={{padding: 5, marginRight: 5, backgroundColor: g.color}}>
							{g.desc}
							<input type="checkbox" />	
						</label>
					)
				}
			</div>
		);
	}
}