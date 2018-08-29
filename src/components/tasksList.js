import React from 'react';
import Task from 'components/task';

/*
	Список задач отрисовывает либо все задачи, либо задачи выбранной группы. 
	Для выбора группы используется либо выпадающий список, 
	либо массив из кнопок (button или radioButton)
*/

export default class TasksList extends React.Component {
	render() {
		const {tasks} = this.props;
		return (
			<div>
				{
					tasks.map(t => 
						<Task key={t.id} {...t} />
					)
				}
			</div>
		);
	}
}