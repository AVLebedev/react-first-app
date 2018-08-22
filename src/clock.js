import React, { Component } from 'react';

class Clock extends React.Component {
	constructor() {
		super();
		this.state = {
			time: 0
		}
	}
	tick() {
		this.setState(prevState => {
			time: prevState.time++
		});
		console.log(this.state.time);
	}	
	componentDidMount() {
		this.intervalId = setInterval(this.tick.bind(this), 1000);
	}
	componentWillUnmount(){
		clearInterval(this.intervalId);
	}
	render() {
		return (
			<h2>Time: {this.state.time}</h2>
		)
	}	
}

module.exports = Clock;