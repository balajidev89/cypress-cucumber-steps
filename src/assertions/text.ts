import { Then } from '@badeball/cypress-cucumber-preprocessor';

/**
 * Then I see text:
 *
 * ```gherkin
 * Then I see text {string}
 * ```
 *
 * Assert that an element with text **_exists_** and is **_visible_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I see text "Text"
 * ```
 *
 * @see
 *
 * - {@link Then_I_see_button | Then I see button}
 * - {@link Then_I_see_heading | Then I see heading}
 * - {@link Then_I_see_label | Then I see label}
 * - {@link Then_I_see_link | Then I see link}
 */
export function Then_I_see_text(text: string) {
  cy.contains(text).should('exist').and('be.visible');
}

Then('I see text {string}', Then_I_see_text);

/**
 * Then I do not see text:
 *
 * ```gherkin
 * Then I do not see text {string}
 * ```
 *
 * Assert that the text **_does not exist_** in the screen.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see text "Text"
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_visible_text | Then I do not see visible text}
 */
export function Then_I_do_not_see_text(text: string) {
  cy.contains(text).should('not.exist');
}

Then('I do not see text {string}', Then_I_do_not_see_text);

/**
 * Then I do not see visible text:
 *
 * ```gherkin
 * Then I do not see visible text {string}
 * ```
 *
 * Assert that the text **_exists_** in the screen but is **_hidden_**.
 *
 * @example
 *
 * ```gherkin
 * Then I do not see visible text "Text"
 * ```
 *
 * @see
 *
 * - {@link Then_I_do_not_see_text | Then I do not see text}
 */
export function Then_I_do_not_see_visible_text(text: string) {
  cy.contains(text).should('not.be.visible');
}

Then('I do not see visible text {string}', Then_I_do_not_see_visible_text);
