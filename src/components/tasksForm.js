import React from 'react';

/*
	Форма добавляет новый Task в массив задач.
*/

export default class TasksForm extends React.Component {
	constructor(props){
		super(props);

		if(this.props.submitCallback && typeof this.props.submitCallback === 'function'){
			this.submitCallback = this.props.submitCallback;
		}
		else {
			this.submitCallback = () => {};
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {tasks} = this.props;
		const newTask = {
			id: tasks[tasks.length-1].id + 1,
			name: this.refs.taskName.value,
			description: this.refs.taskDesc.value,
			group: this.props.groupsList.find(g => g.id == this.refs.taskGroup.value)
		}
		tasks.push(newTask);
		this.submitCallback(tasks);
	}

	render() {
		const {groupsList, style} = this.props;
		return (
			<form onSubmit={this.handleSubmit} style={style}>
				<table>
					<tbody>
						<tr>
							<td>Имя: </td>
							<td><input ref="taskName" type="text" /></td>
						</tr>
						<tr>
							<td>Описание: </td>
							<td><input ref="taskDesc" type="text" /></td>
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