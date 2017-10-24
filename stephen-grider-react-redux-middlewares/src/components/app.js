import React, { Component } from 'react';
import UserList from './user_list';
import EventsList from './events_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <UserList /> 
        <EventsList /> 
      </div>
    );
  }
}
