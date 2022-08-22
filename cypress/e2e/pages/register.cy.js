export  class RegisterPage {
    registerButton = 'p > .link--orange';

    registerClick() {
        cy.get(this.registerButton).click()
    }
}