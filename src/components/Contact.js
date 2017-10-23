import React, { Component } from 'react';
import '../App.css';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">Contact: {this.state.name}, Phone: {this.state.phone}</div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { name: this.props.name, phone: this.props.phone };
  }
};

export default Contact;