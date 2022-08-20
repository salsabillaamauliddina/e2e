// <reference types="cypress"/>
import {LoginPage} from '../e2e/pages/login.cy'
const loginPage = new LoginPage()

describe('All login tests', () => {

    beforeEach(() => { 
        cy.visit('https://www.klob.id/')
    })


    it ('login with valid credentials', () => {
        cy.get(':nth-child(2) > a > .sc-EHOje').click()
        loginPage.enterEmail('salsabilla.mauliddina@gmail.com')
        loginPage.enterPassword('Allahuakbar12')
        loginPage.enterLogin()
        // cy.get(':nth-child(1) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
        //     .type("salsabilla.mauliddina@gmail.com")
        // cy.get(':nth-child(2) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
        //     .type('Allahuakbar12')
        // cy.contains('MASUK').click()
    })

    // it ('login with invalid credentials', () => {
    //     cy.get(':nth-child(2) > a > .sc-EHOje').click()
    //     cy.get(':nth-child(1) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
    //         .type("salsabillmauliddina.com")
    //     cy.get(':nth-child(2) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
    //         .type('Allahuakbar12')
    //     cy.contains('MASUK').click()
    // })

    // it ('login with invalid credentials 2', () => {
    //     cy.get(':nth-child(2) > a > .sc-EHOje').click()
    //     cy.get(':nth-child(1) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
    //         .type("salsabilla.mauliddina@gmail.com")
    //     cy.get(':nth-child(2) > .col-xl-12 > .form-group > [style="display: flex;"] > [style="width: 100%;"] > .form-control')
    //         .type('123123123')
    //     cy.contains('MASUK').click()
    // })


    it('login with google',() => {
        cy.get(':nth-child(2) > a > .sc-EHOje').click()
        cy.get(':nth-child(3) > .d-flex > .sc-cmjSyW').click()
        loginPage.redirectGoogleLogin()
    })

    it('login with linkedin',() => {
        cy.get(':nth-child(2) > a > .sc-EHOje').click()
        cy.get(':nth-child(4) > .sc-cmjSyW').click()
        loginPage.redirectLinkedin()
    })
})