Feature: Example
  Scenario: See and not see text
    When I visit "https://example.com/"
    Then I see text "Example Domain"
      And I see text "More information"
      And I do not see text "Lorem ipsum"

  Scenario: Reload and assert URL
    When I visit "https://example.com/index.html"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://example.com/index.html"
      And I see URL contains "/index.html"

  Scenario: Screenshot
    When I visit "https://example.com/"
      And I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Cookie
    When I visit "https://example.com/"
      And I set cookie "cookie_name" to "cookie_value"
