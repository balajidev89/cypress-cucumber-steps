Feature: Example
  Scenario: See document title
    Given I visit "https://example.com/"
    Then I see document title "Example Domain"
      | log | true |
      | timeout | 0 |
      And I see document title contains "Example"
        | log | true |
        | timeout | 0 |

  Scenario: Heading
    Given I visit "https://example.com/"
    Then I see heading "Example Domain"
    When I find headings by text "Example Domain"
    Then I count 1 element
    When I find heading by text "Example Domain"
    Then I count 1 element
      And I do not see heading "Foo"

  Scenario: Text
    Given I visit "https://example.com/"
    Then I see text "Example Domain"
      And I see text "More information"
      And I do not see text "Lorem ipsum"

  Scenario: See and not see link
    Given I visit "https://example.com/"
    Then I see link "More information"
      And I do not see link "Lorem ipsum"

  Scenario: See attribute
    Given I visit "https://example.com/"
    When I find element by text "More information"
    Then I see element has attribute "href"
      And I see element attribute "href" equals "https://www.iana.org/domains/example"
    When I find link by text "More information..."
    Then I see element attribute "href" contains "iana.org"

  Scenario: Reload and assert URL
    Given I visit "https://example.com/index.html"
      And I reload the page
      And I wait 1 millisecond
    Then I see URL "https://example.com/index.html"
      And I see URL contains "/index.html"
    Then I do not see URL "https://example.com/index.htm"
      And I do not see URL contains "foo"

  Scenario: Hash
    Given I visit "https://example.com/#foobar"
    Then I see hash "#foobar"
      And I see hash contains "bar"

  Scenario: Screenshot
    Given I visit "https://example.com/"
    Then I screenshot
      And I screenshot "path/to/screenshot"

  Scenario: Log
    Then I log "Hello, world!"

  Scenario: Viewport
    Given I visit "https://example.com/"
    When I set viewport to "iphone-6"
      And I set viewport to "ipad-mini" and "landscape"
      And I set viewport to 800px by 600px

  Scenario: Get selector
    Given I visit "https://example.com/"
    When I get element by selector "p"

  Scenario: Cypress config
    When I set Cypress config "defaultCommandTimeout" to "10000"
      And I set Cypress config
        | defaultCommandTimeout | 10000 |
