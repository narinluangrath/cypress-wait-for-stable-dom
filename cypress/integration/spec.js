// @ts-check
/// <reference path="../../src/index.d.ts" />
// @ts-ignore
const { registerCommand } = require('../..')
registerCommand()

describe('cypress-wait-for-stable-dom', () => {
  it('works as a parent command', () => {
    // Path with respect to the root folder
    cy.visit('cypress/index.html');

    // Wait for setIntervals to finish adding elements to the document
    cy.waitForStableDOM({ pollInterval: 2000, timeout: 15000 })
      .then(document => {
        expect(document).to.have.attr('nodeName', '#document');
      })

    // If above comamnd worked, "Done 1!" should be immediately available
    cy.get('#1', { timeout: 0 })
      .contains('Done 1!', { timeout: 0 });
  });

  it('works as a child command', () => {
    // Path with respect to the root folder
    cy.visit('cypress/index.html');

    // Wait for setIntervals to finish adding elements to 
    cy.get('#2')
      .waitForStableDOM({ pollInterval: 1000, timeout: 5000 })
      .then(div => {
        expect(div).to.have.id('2');
      })

    // If above comamnd worked, "Done 2!" should be immeidately available
    cy.get('#2', { timeout: 0 })
      .contains('Done 2!', { timeout: 0 });
  });
})
