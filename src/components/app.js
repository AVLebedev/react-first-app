import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import About from 'components/about';
import VisibleTasksList from 'containers/VisibleTasksList';


const App = () => (
	<Router>
		<div>
			<nav style={{marginBottom: 20}}>
			 	<Link to="/">Index</Link> |&nbsp;
			 	<Link to="/list">Tasks</Link>

			</nav>
			<div>
			 	<Route path="/" component={About}/>
			 	<Route exact path="/list" component={VisibleTasksList}/>
			 	<Route exact path="/list/:item_id" component={VisibleTasksList}/>
			</div>
		</div>
  	</Router>
);

export default App;
/*export default connect(
	state => ({
		testStore: state
	}),
	dispatch => ({})
)(App); */