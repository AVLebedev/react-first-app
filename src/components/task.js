import React from 'react';
import groups from 'constants/groups';
import { IoIosClose } from 'react-icons/io';

/*
	Задача - имеет поля 
	name (название Задачи, обязательное поле) (обязательно), 
	description (описание, опциональное поле) 
	и group (группа задач, обязательное поле)
*/

export default class Task extends React.Component {
	render() {
		const {id, name, description, group, handleDelete} = this.props;
		const style = Object.assign({backgroundColor: group.color, padding: 5}, this.props.style);
		return (
			<div style={style}>
				<div>Имя: {name}</div>
				<div>Описание: {description}</div>
				<div>Группа: {group.desc}</div> 
				<div title="Удалить" className="del-btn" onClick={(e) => handleDelete(id, e)}>
					<IoIosClose />
				</div>
			</div>
		)			
	}
}

Task.defaultProps = {group: groups.todo}; // По умолчанию задаче присваивается группа ‘todo’