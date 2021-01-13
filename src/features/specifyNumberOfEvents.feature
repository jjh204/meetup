Feature: Specify Number of Events

  Scenario: When user hasn’t specified a number, 32 is the default number
    Given the user hasn’t selected a specific number
    When a new search is made
    Then the default number of results being displayed is 32.

  Scenario: User can change the number of events they want to see
    Given the user has updated the number of results to display
    When a new search is made
    Then the number of results will match the number specified in their preferences