import React, { Component } from 'react';
import '../App.css';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">Contact: {this.state.name}</div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { name: 'Henrik' };
  }
};

export default Contact;