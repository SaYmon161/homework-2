import React, { Component } from 'react';
import Message from '../Message';
import './Chat.css';

class Chat extends Component {
  state = {
    messages: [],
    messageInput: ''
  };

  changeInputMessage = event => {
    this.setState({ messageInput: event.target.value });
  };
  sendMessageOnEnter = event => {
    if (event.key === 'Enter') {
      this.setState(state => {
        const arr = state.messages.push({ text: state.messageInput });

        return {
          arr,
          messageInput: ''
        };
      });
    }
  };

  render() {
    return (
      <div className="chat">
        {this.state.messages.map((message, index) => (
          <Message text={message.text} key={index} />
        ))}
        <input
          type="text"
          className="input-message"
          value={this.state.messageInput}
          onChange={this.changeInputMessage}
          onKeyPress={this.sendMessageOnEnter}
        />
      </div>
    );
  }
}

export default Chat;
