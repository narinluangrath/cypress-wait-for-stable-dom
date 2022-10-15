# cypress-wait-for-stable-dom

> Wait until the DOM is stable before continuing with test. Useful for visual regression testing.



https://user-images.githubusercontent.com/13155517/147802185-2371a02c-a96c-4000-92d6-08c9fb0d2b90.mp4



Uses [Mutation Observer] to detect DOM changes.

This repo was bootstraped from [bahmutov/cypress-get-by-label] and has logic based on the same author's (Gleb Bahmutov) [article].
## Install

```
npm i -D cypress-wait-for-stable-dom
# or
yarn add -D cypress-wait-for-stable-dom
```

## Use

Include from your Cypress support file or individual spec

```js
const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand()

// or
import { registerCommand } from 'cypress-wait-for-stable-dom'
registerCommand()
```

Then use the command `cy.waitForStableDOM()`

```js
// Proceed with test if DOM is stable for 1 second
// Throw timeout error if DOM is unstable for 10 seconds
cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
```

When used as a [parent command] (like above), it will check for changes in the entire `document`. To only check a particular part of the DOM, use it as a [child command].

```js
// Only listen for changes to #myDomElement
cy.get('#myDomElement')
  .waitForStableDOM({ pollInterval: 1000, timeout: 10000 })
```

If you'd like to customize the [options] passed to mutation observer, you can provide an optional `mutationObserver` property.

```js
const mutationObserver = {
  // Only listen to CSS changes
  attributeFilter: [ "style", "class" ],
  subtree: true,
  childList: true,
  attributes: true,
  attributeOldValue: true,
}

cy.waitForStableDOM({ pollInterval: 1000, timeout: 10000, mutationObserver })
```

The argument you provide to `cy.waitForStableDOM` will be deep merged with the following default object

```js
const defaultOptions = {
  pollInterval: 1000,
  timeout: 10000,
  mutationObserver: {
    subtree: true,
    childList: true,
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
  },
};
```

You can change what the default object is by specifying it as the argument to `registerCommand`

```js
const { registerCommand } = require('cypress-wait-for-stable-dom')
registerCommand({ pollInterval: 300, timeout: 2000 })

// or
import { registerCommand } from 'cypress-wait-for-stable-dom'
registerCommand({ pollInterval: 300, timeout: 2000 })
```
## Types

To get IntelliSense working with the custom command `cy.waitForStableDOM` include in your specs

```js
/// <reference types="cypress-wait-for-stable-dom" />
```

[Mutation Observer]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
[bahmutov/cypress-get-by-label]: https://github.com/bahmutov/cypress-get-by-label
[article]: https://glebbahmutov.com/blog/cypress-recurse
[parent command]: https://docs.cypress.io/api/cypress-api/custom-commands#Parent-Commands
[child command]: https://docs.cypress.io/api/cypress-api/custom-commands#Child-Commands
[options]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver/observe#parameters
