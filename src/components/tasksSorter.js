import React from 'react';

/*
	Добавить сортировку для задач по названию задачи
*/

const TasksSorter = (props) => {
	const {tasks, sortCallback} = props;

	const sortByName = () => {
		tasks.sort((t1, t2) => {
			if (t1.name < t2.name)
				return -1;
			if (t1.name > t2.name)
				return 1;
			return 0;
		});
		sortCallback(tasks);
	}

	return (
		<div>
			<button onClick={sortByName}>Сортировать по имени</button>
		</div>
	)
}

export default TasksSorter;