import React from 'react';
import ReactDOM from 'react-dom';
import TasksList from 'components/tasksList';
import groups from 'constants/groups'
import TasksFilter from 'components/tasksFilter';

import 'styles/tasksForm.scss';

ReactDOM.render(
	<TasksList />,
	document.getElementById("root")
);

module.hot.accept();