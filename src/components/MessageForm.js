import React, { Component } from 'react';
import '../App.css';
import './MessageForm.css';

class MessageForm extends Component {
  render() {
    return (
      <div className="MessageForm">
        <form className="form-inline" onSubmit={this.sendAndClear}>
          <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
          <button className="btn btn-sm btn-primary" type="submit">Send Message</button>
        </form>
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.sendAndClear = this.sendAndClear.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  sendAndClear(event) {
    this.props.onSubmit(event);
    this.setState({value: ''});
  }
};

export default MessageForm;