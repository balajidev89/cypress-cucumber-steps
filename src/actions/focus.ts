import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement } from '../utils';

/**
 * When I focus:
 *
 * ```gherkin
 * When I focus
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I focus
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I focus
 * ```
 */
export function When_I_focus() {
  getCypressElement().focus();
}

When('I focus', When_I_focus);
