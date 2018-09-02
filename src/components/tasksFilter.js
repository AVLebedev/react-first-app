import React from 'react';
import groups from 'constants/groups';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, либо массив из кнопок (button или radioButton).
*/

export default class TasksFilter extends React.Component {
	render() {//ToDo: заюзать transform-react-statements
		console.log(this.props);
		const {style, groupsList, checkedGroups, handleChange, handleChangeAll} = this.props;
		return (
			<div style={style}>	
				<label style={{padding: 5, marginRight: 5, backgroundColor: 'grey'}}>
					Все
					<input type="checkbox" onChange={handleChangeAll} />	
				</label>
				{
					groupsList.map(g => 
						<label key={g.id} style={{padding: 5, marginRight: 5, backgroundColor: g.color}}>
							{g.desc}
							<input type="checkbox" value={g.id} checked={checkedGroups.includes(g.id)} onChange={handleChange} />	
						</label>
					)
				}
			</div>
		);
	}
}