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
        <div className="SimpleMessage panel">Mepple
          <Route path='/' component={PrimaryView} />
          <Route path='/contacts' component={ContactsList}/>
          <Route path='/messages' component={MessageHistory}/>
        </div>
      </BrowserRouter>
    );
  }

};

export default SimpleMessage;