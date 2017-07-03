import React, { Component } from 'react';

class InputField extends Component {
	
	constructor(props) {
		super(props);
		
		this.handleNewMessage = this.handleNewMessage.bind(this);
	}
	
	handleNewMessage(e) {
		let message = e.target.querySelectorAll('input')[0].value
		if (message !== '') {
			this.props.handleNewMessage(message, 'out');
			setTimeout(()=>{
				this.props.handleNewMessage('Hello there!', 'in');
			}, 1500)
			e.target.reset();
		}
		e.preventDefault();
	}
	
	render() {
		return (
			<form onSubmit={this.handleNewMessage}>
				<input className="input__field" type="text" placeholder="Type a message" />
			</form>
		)
	}
}

export default InputField;

