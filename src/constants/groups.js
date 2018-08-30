/*
	Группы задач - 
		‘todo’ (Выполнить), 
		‘inProgress’ (Выполняется), 
		‘done’ (Выполнено).
*/
const groups = {
	todo: {
		name: 'todo',
		desc: 'Выполнить',
		color: '#1E90FF'//'dodgerblue'
	},
	inProgress: {
		name: 'inProgress',
		desc: 'Выполняется',
		color: 'yellow'
	},
	done: {
		name: 'done',
		desc: 'Выполнено',
		color: 'green'
	}
};

export default groups;