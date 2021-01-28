import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberEvents from './NumberEvents';
import EventGenre from './EventGenre';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
      <div>
        <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark" className="fixed-top navbar-main">
          <Navbar.Brand href="https://jjh204.github.io/meetup/" className="navbar-brand" style={{ color: '#e58d9c' }} >Meet & Social</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="https://jjh204.github.io/portfolio-website" target="_blank" rel="noopener" className="navbar-link" style={{ color: '#e58d9c' }}>Developer Portfolio</Nav.Link>
              <Nav.Link href="https://github.com/jjh204" target="_blank" rel="noopener" className="navbar-link" style={{ color: '#e58d9c' }}>GitHub</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="App">
          <h1>MEET & SOCIAL</h1>
          <h3>Events for the Social Coder</h3>
          <CitySearch locations={locations} number={number} updateEvents={this.updateEvents} />
          <NumberEvents currentLocation={currentLocation} number={number} updateEvents={this.updateEvents} />
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
