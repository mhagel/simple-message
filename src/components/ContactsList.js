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
            {name: 'Henrik', phone: '(303) 555-1234'},
            {name: 'Arthur', phone: '(720) 444-4321'},
            {name: 'Minnie', phone: '(303) 333-5678'},
        ]
    };
  }

  renderContacts() {
    return this.state.contacts.map(contact => (
        <Contact {...contact}/>
    ));
  }
};

export default ContactsList;