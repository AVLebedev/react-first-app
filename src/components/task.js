import React from 'react';
import groups from 'constants/groups';

/*
	Задача - имеет поля 
	name (название Задачи, обязательное поле) (обязательно), 
	description (описание, опциональное поле) 
	и group (группа задач, обязательное поле)
*/

export default class Task extends React.Component {
	render() {
		const {name, description, group} = this.props;
		return (
			<div>
				<div>Имя: {name}</div>
				<div>Описание: {description}</div>
				<div>Группа: {group.desc}</div> 
			</div>
		)			
	}
}

Task.defaultProps = {group: groups.todo}; // По умолчанию задаче присваивается группа ‘todo’