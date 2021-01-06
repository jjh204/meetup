import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {

  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event event={mockData} />);
  });

  test('each event div component is rendered', () => {
    expect(EventWrapper.find('.event')).toHaveLength(1);
  });

  test('each event div component has event overview rendered', () => {
    expect(EventWrapper.find('.eventOverview')).toHaveLength(1);
  });

  test('each event shows the correct overview overview information', () => {
    expect(EventWrapper.find('.eventOverview').children()).toHaveLength(4);
  });

  test('the show button is rendered', () => {
    EventWrapper.setState({ details: false });
    expect(EventWrapper.find('.showDetails-btn')).toHaveLength(1);
  });

  test('the full event details are rendered when event details open', () => {
    EventWrapper.setState({ details: true });
    expect(EventWrapper.find('.about')).toHaveLength(1);
    expect(EventWrapper.find('.link')).toHaveLength(1);
    expect(EventWrapper.find('.description')).toHaveLength(1);
  });

  test('the hide button is rendered when event details open', () => {
    EventWrapper.setState({ details: true });
    expect(EventWrapper.find('.hideDetails-btn')).toHaveLength(1);
  });

  test('clicking show details will open event details correctly', () => {
    EventWrapper.setState({ details: false });
    EventWrapper.find('.eventOverview button').simulate('click');
    expect(EventWrapper.state('details')).toBe(true);
  });

  test('clicking hide details will close event details correctly', () => {
    EventWrapper.find('.eventOverview button').simulate('click');
    expect(EventWrapper.state('details')).toBe(false);
  });

});