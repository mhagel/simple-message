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
        <div className="SimpleMessage panel">
          <div class="panel-heading">simple message</div>
          <div class="panel-body">
            <Route path='/' component={PrimaryView} />
            <Route path='/contacts' component={ContactsList}/>
            <Route path='/messages' component={MessageHistory}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }

};

export default SimpleMessage;