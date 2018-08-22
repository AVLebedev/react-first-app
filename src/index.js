import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './counter';

ReactDOM.render(<Counter />, document.getElementById("root"));
/*setInterval(function(){ 
	ReactDOM.render(<Counter />, document.getElementById("root")); 
}, 1000);*/
module.hot.accept();