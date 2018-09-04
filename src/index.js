import React from 'react';
import ReactDOM from 'react-dom';
import TasksList from 'components/tasksList';
import groups from 'constants/groups'
import TasksFilter from 'components/tasksFilter';

const tasks = [
	{
		id: 1,
		name: "Задача №1",
		description: "Реализовать счётчик",
		group: groups.done
	},
	{
		id: 2,
		name: "Задача №2",
		description: "Список ToDo: минимальная реализация",
		group: groups.inProgress
	},
	{
		id: 3,
		name: "Задача №3",
		description: "Список ToDo: дополнительный функционал",
		group: groups.todo
	},
	{
		id: 4,
		name: "Задача №4",
		description: "Список ToDo: уровень - бог",
		group: groups.todo
	}
];

ReactDOM.render(
	<TasksList tasks={tasks} />,
	document.getElementById("root")
);

module.hot.accept();