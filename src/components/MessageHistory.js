import React, { Component } from 'react';
import '../App.css';
import './MessageHistory.css';
import Message from './Message';
import MessageForm from './MessageForm';

class MessageHistory extends Component {
  
  render() {
    return (
      <div className="MessageHistory" messages={this.props.messages}>
          {this.renderMessages()}
          <MessageForm onSubmit={this.props.onSubmit}/>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {messages: this.props.messages};
    this.renderMessages = this.renderMessages.bind(this);
    this.postMessage = postMessage.bind(this);
  }

  componentDidMount() {
    this.setState({messages: this.props.messages});
  }

  componentWillReceiveProps() {
    this.setState({messages: this.props.messages});
  }

  renderMessages() {
    if (this.props.messages) {
      return this.props.messages.map(message => (
          <Message key={message.date} {...message}/>
      ));
    } else {
      return <div></div>
    }
  }
  
};

export default MessageHistory;