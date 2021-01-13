import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

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
      <div className="App">
        <CitySearch locations={locations} number={number} updateEvents={this.updateEvents} />
        <NumberEvents currentLocation={currentLocation} number={number} updateEvents={this.updateEvents} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
