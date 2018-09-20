import React from 'react';

/*
	Форма добавляет новый Task в массив задач.
*/

export default class TasksForm extends React.Component {
	render() {
		const {groupsList, style} = this.props;
		return (
			<form style={style}>
				<table>
					<tbody>
						<tr>
							<td>Имя: </td>
							<td><input type="text" /></td>
						</tr>
						<tr>
							<td>Описание: </td>
							<td><input type="text" /></td>
						</tr>
						<tr>
							<td>Группа: </td>
							<td>
								<select>
									{
										groupsList.map((g) => {
											console.log(g);
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