// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * @param commandOptions {Object} Options to customize the retry logic
     * @param commandOptions.pollInterval {number} Time to pass with no DOM changes before continuing
     * @param commandOptions.timeout {number} Time to pass before exiting with an error
     * @param mutationOptions {Object} Options to customize MutationObserver logic
     * @param mutationOptions.subtree {boolean}
     * @param mutationOptions.childList {boolean}
     * @param mutationOptions.attributes {boolean}
     * @param mutationOptions.attributeFilter {string[]}
     * @param mutationOptions.attributeOldValue {boolean}
     * @param mutationOptions.characterData {boolean}
     * @param mutationOptions.characterDataOldValue {boolean}
     */
    waitForStableDOM(commandOptions, mutationOptions): Chainable<JQuery<HTMLElement>>
  }
}

declare module "cypress-wait-for-stable-dom" {
 export var registerCommand: () => void;
}
