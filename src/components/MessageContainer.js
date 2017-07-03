import React, { Component } from 'react';
import Message from './Message';

class MessageContainer extends Component {
	render() {
		let messages = [];
		this.props.messages.forEach((message) => {
			messages.push(<Message message={message.text} direction={message.type} time={message.time} />)
		});
		
		return (
			<div className="message__container">
				{messages}
				<div className="message__tile"></div>
			</div>
		)
	}
}

export default MessageContainer;