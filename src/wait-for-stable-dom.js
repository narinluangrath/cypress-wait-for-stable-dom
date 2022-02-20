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

const waitForStableDOM = (subject, userOptions, iteration = 0) => {
  const options = Object.assign({}, defaultOptions, userOptions);
  
  cy.document()
    .then(document => {
      let mutation;
      const target = (subject && subject[0]) || document;
      const observer = new MutationObserver((m) => mutation = m);      
      observer.observe(target, options.mutationObserver);
      
      cy.wait(options.pollInterval, { log: false }).then(() => {
        if (!mutation) {
          cy.log(`No changes detected for over interval ${options.pollInterval}ms!`);
          cy.log('Continuing with test...');
          return cy.wrap(target);
        } else if ((iteration * options.pollInterval) < options.timeout) {
          cy.log('Mutation detected... retrying...');
          return waitForStableDOM(subject, userOptions, iteration + 1);
        } else {
          throw Error('Timed out waiting for stable DOM');
        }
      });
    });
}

module.exports = { waitForStableDOM };
