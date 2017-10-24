import React, { Component } from 'react';
import '../App.css';
import './Contact.css';
import MessageHistory from './MessageHistory';
import { getMessagesWith } from '../MessageService';

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="Contact"
          onClick={this.showMessageHistory}>
          {this.state.name} ({this.state.total})
        </div>
        {this.renderMessages()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { id: this.props.id, name: this.props.name, total: this.props.total, messages: [], clickedContact: false };
    this.getMessagesWith = getMessagesWith.bind(this);
    this.showMessageHistory = this.showMessageHistory.bind(this);
    this.renderMessages = this.renderMessages.bind(this);
  }

  showMessageHistory() {
    console.log(this.state.id);
    this.setState({clickedContact: !this.state.clickedContact});
    this.getMessagesWith(this.state.id).then(
      res => {
        this.setState({messages: res});
      });
  }

  renderMessages() {
    if (this.state.clickedContact) {
      return (
        <MessageHistory messages={this.state.messages}/>
      );
    } else {
      return <div></div>
    }
  }
};

export default Contact;