import React from 'react';
import { shallow } from 'enzyme';
import NumberEvents from '../NumberEvents';

describe('<NumberEvents /> component', () => {

  let NumberEventsWrapper;
  beforeAll(() => {
    NumberEventsWrapper = shallow(<NumberEvents />);
  });

  test('render input label for number of events', () => {
    expect(NumberEventsWrapper.find('.numberEvents label')).toHaveLength(1);
  });

  test('render input text for number of events', () => {
    expect(NumberEventsWrapper.find('.numberEvents')).toHaveLength(1);
  });

  test('render input text for number of events correctly', () => {
    const number = NumberEventsWrapper.state('number');
    expect(NumberEventsWrapper.find('.numberInput').prop('value')).toBe(number);
  });

  test('change state when text input changes', () => {
    NumberEventsWrapper.setState({
      number: '24'
    });
    const eventObject = { target: { value: '32' } };
    NumberEventsWrapper.find('.numberInput').simulate('change', eventObject);
    expect(NumberEventsWrapper.state('number')).toBe('32');
  });

});