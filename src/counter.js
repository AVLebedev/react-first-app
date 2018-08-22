import React, { Component } from 'react';

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			time: 0
		}
		this.intervalId = null;
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);		
		this.reset = this.reset.bind(this);
	}
	tick() {
		this.setState(prevState => {
			time: prevState.time++
		});
		console.log(this.state.time);
	}	
	/*
	componentDidMount() {
		this.intervalId = setInterval(this.tick.bind(this), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	*/
	start() {
		this.intervalId = setInterval(this.tick.bind(this), 1000);
	}
	stop() {
		if(this.intervalId)
			clearInterval(this.intervalId);	
	}
	reset() {
		this.stop();
		this.setState({
			time: 0
		});
	}
	render() {
		return (
			<div>
				<div>Time: {this.state.time}</div>
				<div style={{marginTop:'5px', display:'flex'}}>
					<button style={{width:50, margin:'5px'}} onClick={this.start}>Start</button>
					<button style={{width:50, margin:'5px'}} onClick={this.stop}>Stop</button>
					<button style={{width:'50', margin:'5px'}} onClick={this.reset}>Reset</button>
				</div>
			</div>
		)
	}	
}

module.exports = Counter;