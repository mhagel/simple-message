import React, { Component } from 'react';
import '../App.css';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">Contact: {this.state.name} ({this.state.total})</div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { name: this.props.name, total: this.props.total };
  }
};

export default Contact;