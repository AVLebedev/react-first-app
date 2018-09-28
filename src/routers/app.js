import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from 'components/about';
import TasksList from 'components/tasksList';


const App = () => (
	<Router>
		<div>
			<nav style={{marginBottom: 20}}>
			 	<Link to="/">Index</Link> |&nbsp;
			 	<Link to="/list">Tasks</Link>

			</nav>
			<div>
			 	<Route path="/" component={About}/>
			 	<Route exact path="/list" component={TasksList}/>
			 	<Route exact path="/list/:item_id" component={TasksList}/>
			</div>
		</div>
  	</Router>
)

export default App;