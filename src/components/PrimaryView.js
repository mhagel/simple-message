import React, { Component } from 'react';
import '../App.css';
import './PrimaryView.css';
import ContactsList from './ContactsList';
import MessageHistory from './MessageHistory';

class PrimaryView extends Component {
  render() {
    return (
      <div className="PrimaryView">
        <ContactsList />
        <hr/>
        <MessageHistory />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

};

export default PrimaryView;