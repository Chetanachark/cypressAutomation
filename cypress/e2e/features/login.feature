Feature: login functionality and reading data from csv
    scenario:login and reading credentials from csv
        Given I visit url
        when I enter credentials and hit login button
        Then I see products page