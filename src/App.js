import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import BackGround from './img/background.jpg';

class App extends Component {

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  state = {
    events: [],
    locations: [],
    number: 32,
    currentLocation: 'all'
  }

  updateEvents = (location, eventCount) => {
    getEvents().then((events) => {
      const eventResults = (location === 'all') ?
        events.slice(0, eventCount) :
        events.filter((event) => event.location === location).slice(0, eventCount);

      this.setState({
        events: eventResults,
        currentLocation: location,
        number: eventCount
      });
    });
  }

  render() {
    const { locations, number, events, currentLocation } = this.state
    return (
      <body style={{ backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '1200px' }}>
        <div className="App">
          <h1>MEET AND SOCIAL</h1>
          <h3>events for the social coder</h3>
          <CitySearch locations={locations} number={number} updateEvents={this.updateEvents} />
          <NumberEvents currentLocation={currentLocation} number={number} updateEvents={this.updateEvents} />
          <EventList events={events} />
        </div>
      </body>
    );
  }
}

export default App;
