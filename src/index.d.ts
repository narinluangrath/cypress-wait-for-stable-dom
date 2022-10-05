// load type definitions that come with Cypress module
/// <reference types="cypress" />
declare namespace Cypress {
  type Options = {
    pollInterval?: number;
    timeout?: number;
    mutationObserver?: {
      subtree?: boolean;
      childList?: boolean;
      attributes?: boolean;
      attributeOldValue?: boolean;
      characterData?: boolean;
      characterDataOldValue?: boolean;
    },
  }
  interface Chainable {
    waitForStableDOM(options?: Options): Chainable<JQuery<HTMLElement>>
  }
}

declare module "cypress-wait-for-stable-dom" {
 export var registerCommand: () => void;
}
