import React, { Component } from 'react';
import InputField from './InputField';

class InputRow extends Component {
	
	constructor(props) {
		super(props);
		
		this.handleNewMessage = this.handleNewMessage.bind(this);
	}
	
	handleNewMessage(inputText, type) {
		this.props.handleNewMessage(inputText, type);
	}
	
	render() {
		return (
			<div className="input__row">
				<InputField handleNewMessage={this.handleNewMessage} />
			</div>
		)
	}
}

export default InputRow;