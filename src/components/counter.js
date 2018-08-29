import React, { Component } from 'react';

const intervalStep = 1000;

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			time: 0
		}
		this.intervalId = null;
		this.interval = intervalStep;
		this.isActive = false;
	}	
	tick = () => {
		this.setState((prevState) => {
			return {time: prevState.time + 1 };
		});
	}
	start = () => {
		this.intervalId = setInterval(() => this.tick(), this.interval);
		this.isActive = true;
	}
	kill = () => {
		this.isActive = false;
		this.stop();
	}
	stop = () => {
		if (this.intervalId)
			clearInterval(this.intervalId);	
	}
	reset = () => {
		this.kill();
		this.setState({
			time: 0
		});
	}
	increment = () => {
		this.interval += intervalStep;
		this.stop();
		if (this.isActive)
			this.start();
	}
	decrement = () => {
		if (this.interval > 0) {
			this.interval -= intervalStep;
			this.stop();
			if (this.isActive)
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
					<button style={{width:50, margin:'5px'}} onClick={this.kill}>Stop</button>
					<button style={{width:'50', margin:'5px'}} onClick={this.reset}>Reset</button>
					<button style={{width:25, margin:'5px'}} onClick={this.increment}>+</button>
				</div>
			</div>
		)
	}	
}

module.exports = Counter;