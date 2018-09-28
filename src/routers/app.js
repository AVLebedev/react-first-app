import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from 'components/about';
import TasksList from 'components/tasksList';


const App = () => (
	<Router>
		<div>
			<nav style={{marginBottom: 20}}>
			 	<Link to="/">Index</Link> |&nbsp;
			 	<Link to="/list">Tasks</Link> |&nbsp;

			</nav>
			<div>
			 	<Route path="/" component={About}/>
			 	<Route path="/list" component={TasksList}/>
			</div>
		</div>
  	</Router>
)

export default App;

/*
import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import About from 'components/about';
import TasksList from 'components/tasksList';


const App = () => (
	<Router>
		<div>
		 	<ul>
		        <li>
		          <Link to="/">Index</Link>
		        </li>
		        <li>
		          <Link to="/list">Tasks list</Link>
		        </li>
		    </ul>

		    <hr />

			<Route exact path="/" component={About} />
			<Route path="/list" component={TasksList} />
		</div>
  	</Router>
);

export default App;
*/