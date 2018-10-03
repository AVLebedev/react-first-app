import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import App from 'components/app';
import groups from 'constants/groups';
import rootReducer from 'reducers';
import 'styles/tasksForm.scss';
import 'styles/task.scss';

const initialState = {
	tasks: [
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
	]
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById("root")
);

module.hot.accept();