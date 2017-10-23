import React, { Component } from 'react';
import '../App.css';
import './SimpleMessage.css';
import ContactsList from './ContactsList';

class SimpleMessage extends Component {
  render() {
    return (
      <div>
        <div className="SimpleMessage">Simple Message: {this.state.greeting}</div>
        <ContactsList />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }
};

export default SimpleMessage;