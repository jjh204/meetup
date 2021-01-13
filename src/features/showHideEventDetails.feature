Feature: Show / Hide an Event's Details

  Scenario: An event element is collapsed by default
    Given the app is loaded
    When the list of events has been loaded
    Then the event summary is displayed only as default

  Scenario: User can expand an event to see its details
    Given the app is loaded
    And the list of events has been loaded
    When the user clicks to open more details
    Then the event element should expand and show more information

  Scenario: User can collapse an event to hide its details
    Given the app is loaded
    And the list of events has been loaded to show details
    When the user clicks to close the details
    Then the user is returned to the initial summary list of events.