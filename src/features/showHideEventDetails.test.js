import React from 'react';
import { mount } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { mockData } from '../mock-data';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
  test('An event element is collapsed by default', ({ given, when, then }) => {
    let AppWrapper

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    when('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    then('the event summary is displayed only as default', () => {
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0);
    });
  });

  test('User can expand an event to see its details', ({ given, and, when, then }) => {
    let AppWrapper;

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
    });

    when('the user clicks to open more details', () => {
      AppWrapper.find('.event .showDetails-btn').at(0).simulate('click');
    });

    then('the event element should expand and show more information', () => {
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);
    });
  });

  test('User can collapse an event to hide its details', ({ given, and, when, then }) => {
    let AppWrapper

    given('the app is loaded', () => {
      AppWrapper = mount(<App />);
    });

    and('the list of events has been loaded to show details', () => {
      AppWrapper.update();
      expect(AppWrapper.find('.event')).toHaveLength(mockData.length);
      AppWrapper.find('.event .showDetails-btn').at(0).simulate('click');
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(1);
    });

    when('the user clicks to close the details', () => {
      AppWrapper.find('.event .hideDetails-btn').at(0).simulate('click');
    });

    then('the user is returned to the initial summary list of events.', () => {
      expect(AppWrapper.find('.event .eventDetails')).toHaveLength(0);
    });
  });
});