import React, { Component } from 'react';
import '../App.css';
import './PrimaryView.css';
import ContactsList from './ContactsList';

class PrimaryView extends Component {
  render() {
    return (
      <div className="PrimaryView container">
        <ContactsList />
      </div>
    );
  }

  constructor(props) {
    super(props);

    this.state = {};
  }

};

export default PrimaryView;