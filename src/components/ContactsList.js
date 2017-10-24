import React, { Component } from 'react';
import '../App.css';
import './ContactsList.css';
import Contact from './Contact';
import { getContacts } from '../MessageService';

class ContactsList extends Component {
  render() {
    return (
      <div className="ContactsList">
        <h3>Contacts</h3>
        {this.renderContacts()}
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {};
    this.getContacts = getContacts.bind(this);
  }

  componentDidMount() {
    this.getMyContacts();
  }

  getMyContacts() {
    this.getContacts().then(
      res => {
        this.setState({contacts: res.users});
      });
  }

  renderContacts() {
    if (this.state.contacts) {
      return this.state.contacts.map(contact => (
          <Contact key={contact.id} {...contact}/>
      ));
    } else {
      return <div>Loading...</div>
    }
  }
};

export default ContactsList;