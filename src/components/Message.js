import React, { Component } from 'react';
import '../App.css';
import './Message.css';

class Message extends Component {
  render() {
    return (
      <div className="Message">
        <span className="text">{this.state.text}</span><br/>
        <span className="date">({this.state.date})</span>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.text, date: this.props.date, sender_user: this.props.sender_user };
  }
};

export default Message;