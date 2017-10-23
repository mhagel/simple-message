import React, { Component } from 'react';
import '../App.css';
import './SimpleMessage.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PrimaryView from './PrimaryView';
import ContactsList from './ContactsList';
import MessageHistory from './MessageHistory';

class SimpleMessage extends Component {

  render() {
    return (
      <BrowserRouter>      
        <div className="SimpleMessage">Simple Message: {this.state.greeting}
          <Route path='/' component={PrimaryView} />
          <Route path='/contacts' component={ContactsList} />
          <Route path='/messages' component={MessageHistory} />
        </div>
      </BrowserRouter>
    );
  }

  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello' };
  }

};

export default SimpleMessage;