const { getWaitForStableDOM } = require('./wait-for-stable-dom')

const registerCommand = (userDefaultOptions = {}) => {
  Cypress.Commands.add(
    'waitForStableDOM',
    { prevSubject: 'optional' },
    getWaitForStableDOM(userDefaultOptions)
  )
}

module.exports = { registerCommand }
