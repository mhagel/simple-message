import React, { Component } from 'react';
import '../App.css';
import './MessageHistory.css';
import Message from './Message';
import MessageForm from './MessageForm';
import { getMessagesWith } from '../MessageService';

class MessageHistory extends Component {
  
  render() {
    return (
      <div className="MessageHistory" messages={this.props.messages}>
          {this.renderMessages()}
          <MessageForm onSubmit={this.handleMessageSubmit}/>
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {messages: this.props.messages};
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }

  componentDidMount() {
    this.setState({messages: this.props.messages});
  }

  renderMessages() {
    if (this.state.messages) {
      return this.state.messages.map(message => (
          <Message key={message.date} {...message}/>
      ));
    } else {
      return <div></div>
    }
  }

  handleMessageSubmit(event) {
    let message = {text: event.target.elements[0].value, date: new Date().toDateString(), sender_user: 5};
    let newMessages = this.state.messages.slice();
    newMessages.push(message);
    this.setState({messages: newMessages});
    event.preventDefault();
  }
  
};

export default MessageHistory;