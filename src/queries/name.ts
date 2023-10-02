import { When } from '@badeball/cypress-cucumber-preprocessor';

import { getCypressElement, setCypressElement } from '../utils';

/* eslint-disable tsdoc/syntax */
/**
 * When I find elements by name:
 *
 * ```gherkin
 * When I find elements by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find elements by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find elements by name "password"
 *   And I get 1st element
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_element_by_name | When I find element by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_elements_by_name(name: string) {
  setCypressElement(cy.get(`[name='${name}']:visible`));
}

When('I find elements by name {string}', When_I_find_elements_by_name);

/* eslint-disable tsdoc/syntax */
/**
 * When I find element by name:
 *
 * ```gherkin
 * When I find element by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find element by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find element by name "password"
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_elements_by_name | When I find elements by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_element_by_name(name: string) {
  When_I_find_elements_by_name(name);
  setCypressElement(getCypressElement().first());
}

When('I find element by name {string}', When_I_find_element_by_name);

/* eslint-disable tsdoc/syntax */
/**
 * When I find inputs by name:
 *
 * ```gherkin
 * When I find inputs by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find inputs by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find inputs by name "password"
 *   And I get 1st element
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_input_by_name | When I find input by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_inputs_by_name(name: string) {
  When_I_find_elements_by_name(name);
  setCypressElement(getCypressElement().filter('input'));
}

When('I find inputs by name {string}', When_I_find_inputs_by_name);

/* eslint-disable tsdoc/syntax */
/**
 * When I find input by name:
 *
 * ```gherkin
 * When I find input by name {string}
 * ```
 *
 * > A name is not a good substitute for a label so you should generally use {@link When_I_find_element_by_label_text | "When I find element by label text"} instead.
 *
 * @example
 *
 * ```gherkin
 * When I find input by name "text"
 * ```
 *
 * @remarks
 *
 * This precedes steps like {@link When_I_type | "When I type"}. For example:
 *
 * ```gherkin
 * When I find input by name "password"
 *   And I type "password"
 * ```
 *
 * @see
 *
 * - {@link When_I_find_inputs_by_name | When I find inputs by name}
 */
/* eslint-enable tsdoc/syntax */
export function When_I_find_input_by_name(name: string) {
  When_I_find_inputs_by_name(name);
  setCypressElement(getCypressElement().first());
}

When('I find input by name {string}', When_I_find_input_by_name);
