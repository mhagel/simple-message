import React, { Component } from 'react';
import '../App.css';
import './Contact.css';
import MessageHistory from './MessageHistory';
import { getMessagesWith } from '../MessageService';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="Contact"
            onClick={this.showMessageHistory}>
            {this.state.name} ({this.state.total})
          </div>
        </div>
        <div className="col-sm-6 col-sm-offset-6">
          {this.renderMessages()}
        </div>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { id: this.props.id, name: this.props.name, total: this.props.total, messages: [], clickedContact: false };
    this.getMessagesWith = getMessagesWith.bind(this);
    this.showMessageHistory = this.showMessageHistory.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
    this.handleMessageSubmit = this.handleMessageSubmit.bind(this);
  }

  showMessageHistory() {
    this.setState({clickedContact: !this.state.clickedContact});
    this.getMessagesWith(this.state.id).then(
      res => {
        this.setState({messages: res});
      });
  }

  renderMessages() {
    if (this.state.clickedContact) {
      return (
        <MessageHistory messages={this.state.messages} onSubmit={this.handleMessageSubmit}/>
      );
    } else {
      return <div></div>
    }
  }

  handleMessageSubmit(event) {
    let message = {text: event.target.elements[0].value, date: new Date().toISOString(), sender_user: 5};
    let newMessages = this.state.messages.slice();
    newMessages.push(message);
    this.setState({messages: newMessages});
    // this.postMessage(newMessages); TODO: mock api call
    event.preventDefault();
  }
};

export default Contact;