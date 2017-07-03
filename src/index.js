import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import InputRow from './components/InputRow';
import MessageContainer from './components/MessageContainer';
import './styles/app.css';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      messages: [{
        text: 'hello!',
        type: 'out',
        time: '10:00 PM'
      }]
    }
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage(inputText, type) {
    this.setState((prevState, props) => ({
      messages: [...prevState.messages, {text: inputText, type: type, time: '11:00 PM'}]
    }));
  }
  
  render() {
    return (
      <div className="app">
        <MessageContainer messages={this.state.messages} />
        <InputRow inputText={this.state.inputText} handleNewMessage={this.handleNewMessage} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
