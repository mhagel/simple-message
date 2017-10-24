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
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(this.state.value);

    // POST message
    event.preventDefault();
  }
};

export default MessageForm;