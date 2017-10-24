import React, { Component } from 'react';
import '../App.css';
import './MessageForm.css';

class MessageForm extends Component {
  render() {
    return (
      <div className="MessageForm">
        <form onSubmit={this.props.onSubmit}>
          <textarea className="inputBox" onChange={this.handleChange}></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
};

export default MessageForm;