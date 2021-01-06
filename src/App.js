import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberEvents />
        <EventList />
      </div>
    );
  }
}

export default App;
