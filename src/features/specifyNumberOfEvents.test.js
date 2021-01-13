import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import NumberEvents from '../NumberEvents';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

  test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
    given('the user hasn’t selected a specific number', () => {
    });

    let AppWrapper;
    when('a new search is made', () => {
      AppWrapper = mount(<App />);
    });

    then('the default number of results being displayed is 32.', () => {
      AppWrapper.update();
      expect(AppWrapper.state('number')).toBe(32);
    });
  });

  test('User can change the number of events they want to see', ({ given, when, then }) => {
    let AppWrapper;
    given('the user has updated the number of results to display', async () => {
      AppWrapper = await mount(<App />);
      const NumberEventsWrapper = AppWrapper.find(NumberEvents);
      NumberEventsWrapper.find('.numberInput').simulate('change', { target: { value: 1 } });
    });

    when('a new search is made', () => {
      AppWrapper.update();
    });

    then('the number of results will match the number specified in their preferences', () => {
      const NumberEventsWrapper = AppWrapper.find(NumberEvents);
      expect(NumberEventsWrapper.state('number')).toBe(1);
    });
  });
});