/*
	Группы задач - 
		‘todo’ (Выполнить), 
		‘inProgress’ (Выполняется), 
		‘done’ (Выполнено).
*/
const groups = {
	todo: {
		id: 1,
		name: 'todo',
		desc: 'Выполнить',
		color: '#1E90FF'//'dodgerblue'
	},
	inProgress: {
		id: 2,
		name: 'inProgress',
		desc: 'Выполняется',
		color: 'yellow'
	},
	done: {
		id: 3,
		name: 'done',
		desc: 'Выполнено',
		color: 'green'
	}
};

export default groups;