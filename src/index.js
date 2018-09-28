import React from 'react';
import ReactDOM from 'react-dom';

import App from 'routers/app';
import 'styles/tasksForm.scss';
import 'styles/task.scss';

ReactDOM.render(<App />, document.getElementById("root"));

module.hot.accept();