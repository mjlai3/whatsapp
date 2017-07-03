import React, { Component } from 'react';
import Time from './Time';

class Message extends Component {
	render() {
		return (
			<div className="message__row">
				<span className={`message message--${this.props.direction}`}>
					{this.props.message}
					<Time time={this.props.time} />
				</span>
			</div>
		)
	}
}

export default Message;