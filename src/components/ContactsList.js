import React, { Component } from 'react';
import '../App.css';
import './ContactsList.css';
import Contact from './Contact';

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

    this.state = {contacts: []};
  }

  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    let fakeContacts = [
      {name: 'Henrik', total: 3, id: 1},
      {name: 'Arthur', total: 7, id: 2},
      {name: 'Minnie', total: 11, id: 3},
    ];

    this.setState({contacts: fakeContacts});
    
    // fetch('https://api.com/api/contacts').then(
    //   ({ res }) => {
    //     this.setState({contacts: res});
    //   });
  }

  renderContacts() {
    if (this.state.contacts.length) {
      return this.state.contacts.map(contact => (
          <Contact key={contact.name} {...contact}/>
      ));
    } else {
      return <div>Loading...</div>
    }
  }
};

export default ContactsList;