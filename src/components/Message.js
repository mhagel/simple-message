import React, { Component } from 'react';
import '../App.css';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="Message">Message: {this.state.text} ({this.state.date})</div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.text, date: this.props.date, sender_user: this.props.sender_user };
  }
};

export default Message;