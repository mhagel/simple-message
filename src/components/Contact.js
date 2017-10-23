import React, { Component } from 'react';
import '../App.css';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact"
       onClick={this.showMessageHistory}>
        Contact: {this.state.name} ({this.state.total})
      </div>
    );
  }

  constructor(props) {
    super(props);
    this.state = { id: this.props.id, name: this.props.name, total: this.props.total };
  }

  showMessageHistory = () => {
    console.log(this.props.id);
    //render MessageHistory id={this.props.id}
  }
};

export default Contact;