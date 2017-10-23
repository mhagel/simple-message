import React, { Component } from 'react';
import '../App.css';
import './ContactsList.css';
import Contact from './Contact';

class ContactsList extends Component {
  render() {
    return (
      <div className="ContactsList">
          {this.renderContacts()}
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { 
        contacts: [
            {name: 'Henrik', total: 3},
            {name: 'Arthur', total: 7},
            {name: 'Minnie', total: 11},
        ]
    };
  }

  renderContacts() {
    return this.state.contacts.map(contact => (
        <Contact key={contact.name} {...contact}/>
    ));
  }
};

export default ContactsList;