import React, { Component } from 'react';
import '../App.css';
import './ContactsList.css';
import Contact from './Contact';

class ContactsList extends Component {
  render() {
    return (
      <div className="ContactsList">Contacts: {this.state.contacts.length}
          <Contact />
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { contacts: ['Henrik', 'Arthur'] };
  }
};

export default ContactsList;