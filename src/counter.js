import React, { Component } from 'react';

const intervalStep = 1000;

class Counter extends React.Component {
	constructor() {
		super();
		this.state = {
			time: 0
		}
		this.intervalId = null;
		this.interval = intervalStep;
		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);		
		this.reset = this.reset.bind(this);	
		this.increment = this.increment.bind(this);	
		this.decrement = this.decrement.bind(this);
	}	
	/*
	componentDidMount() {
		this.intervalId = setInterval(this.tick.bind(this), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	*/
	tick() {
		this.setState(prevState => {
			time: prevState.time++
		});
		console.log(this.state.time);
	}
	start() {
		this.intervalId = setInterval(this.tick.bind(this), this.interval);
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
	increment() {
		this.interval += intervalStep;
		this.stop();
		this.start();
	}
	decrement() {
		if(this.interval > 0) {
			this.interval -= intervalStep;
			this.stop();
			this.start();
		}		
	}
	render() {
		return (
			<div>
				<div>Time: {this.state.time}</div>
				<div style={{marginTop:'5px', display:'flex'}}>
					<button style={{width:25, margin:'5px'}} onClick={this.decrement}>-</button>
					<button style={{width:50, margin:'5px'}} onClick={this.start}>Start</button>
					<button style={{width:50, margin:'5px'}} onClick={this.stop}>Stop</button>
					<button style={{width:'50', margin:'5px'}} onClick={this.reset}>Reset</button>
					<button style={{width:25, margin:'5px'}} onClick={this.increment}>+</button>
				</div>
			</div>
		)
	}	
}

module.exports = Counter;