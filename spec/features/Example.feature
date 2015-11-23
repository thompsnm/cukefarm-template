Feature: Example

  Scenario: Covered By Unit
    Given I am ready to test all this (covered by ready.spec.js)

  Scenario: Page Navigation
    When I go to the "Index" page
    Then I should be on the "Index" page

  Scenario: Screen Resolution
    Given I have a 500x500 screen size

  Scenario: Navigate Backward
    Given I am on the "Index" page
    When I go to the "Other" page
      And I navigate backwards in my browser
    Then I should be on the "Index" page

  Scenario: Type In A Field
    Given I am on the "Index" page
    When I type "something" in the "Search" field
    Then the "Search Field" should contain the text "something"

  Scenario: Click A Button
    Given I am on the "Index" page
    When I click the "Search" button

  Scenario: Refresh The Page
    Given I am on the "Index" page
    When I refresh the page

  Scenario: Select An Option
    Given I am on the "Index" page
    When I select "Option 2" in the "Search" drop down list
    Then "Option 2" should be selected in the "Search" drop down list
      And "Option 3" should appear in the "Search" drop down list

  Scenario: Page Title
    Given I am on the "Index" page
    Then the title should equal "Protractor Example Test Page"

  Scenario: Tabs
    Given I am on the "Index" page
    Then the "First Tab" should be active

  Scenario: Element Presence
    Given I am on the "Index" page
    Then the "Search Button" should be present
      And the "Search Button" should be displayed
      And the "Search Button" should be enabled

  Scenario: Placeholder Text
    Given I am on the "Index" page
    Then the "Search Field" should contain the placeholder text "Placeholder Text"

  Scenario: Checkboxes
    Given I am on the "Index" page
    When I click the "Search Checkbox"
    Then the "Search" checkbox should be checked

