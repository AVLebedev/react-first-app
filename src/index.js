import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

ReactDOM.render(<Clock />, document.getElementById("root"));
/*setInterval(function(){ 
	ReactDOM.render(<Clock />, document.getElementById("root")); 
}, 1000);*/
module.hot.accept();