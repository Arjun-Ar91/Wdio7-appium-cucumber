Feature: Sample feature file to illustrate app and browser tests

  @androidApp
  Scenario: Convert C to F of a native android app
    Given I launch the app
    When I enter celsius of 1
    Then I should see fahrenheit of 33.8

  @iosApp
  Scenario: Launch Settings app of an iphone
    Given I launch the settings app of iphone
    Then I should see the general label

  @androidBrowser @iosBrowser
  Scenario: Launch the google url in browser
    Given I launch the google
    Then I verify the title to be Google
