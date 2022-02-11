const { waitForStableDOM } = require('./wait-for-stable-dom')

const registerCommand = () => {
  Cypress.Commands.add(
    'waitForStableDOM',
    { prevSubject: 'optional' },
    waitForStableDOM
  )
}

module.exports = { registerCommand }
