import { waitForStableDOM } from './wait-for-stable-dom'

export const registerCommand = () => {
  Cypress.Commands.add('waitForStableDOM', waitForStableDOM)
}
