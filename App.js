import React, { Component } from 'react';

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='app'>
				<div className='header'>fryerpan 🍳</div>
				<div className='body'>{body}</div>
				<div className='footer'>- niello 🥓</div>
			</div>
		);
	}
}

const body = `a simple front-end boilerplate for single page web applications`;