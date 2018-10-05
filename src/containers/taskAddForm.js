import React from 'react';
import { connect } from 'react-redux';
import { addTask } from 'actions';

/*
	Форма добавляет новый Task в массив задач.
*/

class TaskAddForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			nameValid: true,
			descValid: true
		}
	}

	validate = (t) => {
		let nameValid = t.name !== '', 
			descValid = t.description !== '';
		this.setState({
			nameValid,
			descValid
		});
		return nameValid && descValid;
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {tasks, dispatch} = this.props;
		const newTask = {
			id: this.getMaxTaskId(tasks) + 1,
			name: this.refs.taskName.value,
			description: this.refs.taskDesc.value,
			group: this.props.groupsList.find(g => g.id == this.refs.taskGroup.value)
		}
		if (this.validate(newTask)) {
			dispatch(addTask(newTask));
		} else {
			alert('Заполните обязательные поля!')
		}
	}

	getMaxTaskId = (tasks) => {
		return tasks.reduce((res, t) => {
			return Math.max(res, t.id);
		}, 0)
	}

	render() {
		const {groupsList, style} = this.props;
		return (
			<form onSubmit={this.handleSubmit} style={style}>
				<table>
					<tbody>
						<tr>
							<td>Имя: </td>
							<td><input ref="taskName" type="text" className={this.state.nameValid ? '' : 'error'} /></td>
						</tr>
						<tr>
							<td>Описание: </td>
							<td><input ref="taskDesc" type="text" className={this.state.descValid ? '' : 'error'} /></td>
						</tr>
						<tr>
							<td>Группа: </td>
							<td>
								<select ref="taskGroup">
									{
										groupsList.map((g) => {
											return <option key={g.id} value={g.id}>{g.desc}</option>
										})
									}
								</select>
							</td>
						</tr> 
						<tr>
							<td colSpan="2"><button type="submit">Добавить</button></td>
						</tr>
					</tbody>
				</table>
			</form>
		)			
	}
}

export default connect()(TaskAddForm);