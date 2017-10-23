import React, { Component } from 'react';
import '../App.css';
import './MessageHistory.css';
import Message from './Message';
import MessageForm from './MessageForm';

class MessageHistory extends Component {
  render() {
    return (
      <div className="MessageHistory">
          {this.renderMessages()}
          <MessageForm />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {messages: []};
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    let fakeMessages = [
      { "date" :    "2017-01-01   10:10" ,    "text" :  "   Lorem   ipsum   dolor   sit   amet,   consectetur   adipiscing   elit, sed   do   eiusmod   tempor   incididunt   ut   labore   et   dolore   magna   aliqua.",   sender_user:   5},
      { "date" :    "2017-01-01   10:11" ,    "text" :  "   Ut   enim   ad   minim   veniam,   quis   nostrud   exercitation ullamco   laboris   nisi   ut   aliquip   ex   ea   commodo   consequat.",   sender_user:   1} 
    ];

    this.setState({messages: fakeMessages});
    
    // fetch('https://api.com/api/messages?id=' + this.props.sender_user).then(
    //   ({ messagesFromSender }) => {
    //     this.setState({messages: messagesFromSender});
    //   });
  }

  renderMessages() {
    if (this.state.messages.length) {
      return this.state.messages.map(message => (
          <Message key={message.date} {...message}/>
      ));
    } else {
      return <div>...Loading</div>
    }
  }
};

export default MessageHistory;