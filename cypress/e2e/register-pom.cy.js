import {RegisterPage} from '../e2e/pages/register.cy'
const registerPage = new RegisterPage()
describe('All register tests',() => {

    beforeEach(() => {
        cy.visit('https://www.klob.id/')
    })

    it('register with valid credentials', () => {
        cy.get(':nth-child(2) > a > .sc-EHOje').click()
        // cy.get('p > .link--orange').click()
        registerPage.registerClick()
    })
})