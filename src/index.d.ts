// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     * // TODO
     * @param options 
     */
    waitForStableDOM(options): Chainable<JQuery<HTMLElement>>
  }
}
