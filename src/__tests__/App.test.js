import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App';
import EventList from '../EventList';
import CitySearch from '../CitySearch';
import NumberEvents from '../NumberEvents';
import { mockData } from '../mock-data';
import { extractLocations, getEvents } from '../api';

describe('<App /> component', () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test('render list of events', () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test('render CitySearch', () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test('render NumberEvents', () => {
    expect(AppWrapper.find(NumberEvents)).toHaveLength(1);
  })
});

describe('<App /> integration', () => {
  test('App passes "events" state as a prop to EventList', () => {
    const AppWrapper = mount(<App />);
    const AppEventsState = AppWrapper.state('events');
    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test('App passes "locations" state as a prop to CitySearch', () => {
    const AppWrapper = mount(<App />);
    const AppLocationsState = AppWrapper.state('locations');
    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });

  test('get list of events matching the city selected by the user', async () => {
    const AppWrapper = mount(<App />);
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state('suggestions');
    const selectedIndex = Math.floor(Math.random() * (suggestions.length));
    const selectedCity = suggestions[selectedIndex];
    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.location === selectedCity);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('get list of all events when user selects "see all cities"', async () => {
    const AppWrapper = mount(<App />);
    const suggestionItems = AppWrapper.find(CitySearch).find('.suggestions li');
    await suggestionItems.at(suggestionItems.length - 1).simulate('click');
    const allEvents = await getEvents();
    expect(AppWrapper.state('events')).toEqual(allEvents);
    AppWrapper.unmount();
  });

  test('App passes "number" state as a prop to NumberEvents', () => {
    const AppWrapper = mount(<App />);
    const AppNumberState = AppWrapper.state('number');
    expect(AppNumberState).not.toEqual(undefined);
    expect(AppWrapper.find(NumberEvents).props().number).toEqual(AppNumberState);
    AppWrapper.unmount();
  });

  test('check the event count displays the default number', async () => {
    const AppWrapper = mount(<App />);
    const NumberEventsWrapper = AppWrapper.find(NumberEvents);
    NumberEventsWrapper.setState({ number: '2' });
    const number = NumberEventsWrapper.state('number');
    const events = AppWrapper.state('events');
    const defaultCount = events[number];
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(event => event.length === defaultCount);
    expect(AppWrapper.state('events')).toEqual(eventsToShow);
    AppWrapper.unmount();
  });

  test('update events after user changes number of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.instance().updateEvents = jest.fn();
    AppWrapper.instance().forceUpdate();
    const NumberEventsWrapper = AppWrapper.find(NumberEvents);
    NumberEventsWrapper.instance().handleInputChanged({
      target: { value: 1 },
    });
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledTimes(1);
    expect(AppWrapper.instance().updateEvents).toHaveBeenCalledWith(location, 1);
    AppWrapper.unmount();
  });

  test('change state after get list of events', async () => {
    const AppWrapper = shallow(<App />);
    AppWrapper.instance().updateEvents("");
    await AppWrapper.update();
    expect(await AppWrapper.state("events")).toEqual(mockEvents);
    AppWrapper.unmount();
  });

  test('render correct list of events', () => {
    const AppWrapper = mount(<App />);
    AppWrapper.setState({
      events: mockEvents,
    });
    expect(AppWrapper.find(".event")).toHaveLength(mockEvents.length);
    AppWrapper.unmount();
  });
});