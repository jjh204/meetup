import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';
import EventGenre from './EventGenre';
import { extractLocations, getEvents } from './api';
import './nprogress.css';
import BackGround from './img/background.jpg';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

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

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(' ').shift()
      return { city, number };
    })
    return data;
  };

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
      <div style={{ backgroundImage: `url(${BackGround})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', minHeight: '1200px' }}>
        <div className="App">
          <h1>MEET AND SOCIAL</h1>
          <h3>Events for the Social Coder</h3>
          <CitySearch locations={locations} number={number} updateEvents={this.updateEvents} />
          <NumberEvents currentLocation={currentLocation} number={number} updateEvents={this.updateEvents} />
          <h3 className="dataTitle">Data display of Events per Genre and City:</h3>
          <div className="data-vis-wrapper">
            <EventGenre events={events} />
            <ResponsiveContainer height={400} >
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20, }}>
                <CartesianGrid />
                <XAxis type="category" dataKey="city" name="City" />
                <YAxis type="number" dataKey="number" name="Number of Events" allowDecimals={false} />
                <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                <Scatter data={this.getData()} fill="#1b253a" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
          <EventList events={events} />
        </div>
      </div>
    );
  }
}

export default App;
