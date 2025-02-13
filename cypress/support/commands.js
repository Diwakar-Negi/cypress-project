// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

const { default: LoginPage } = require("./pageObjects/LoginPage")

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://test-vt-lis.azurewebsites.net/')
    LoginPage.enterUserame(username);
    LoginPage.enterPassword(password);
    LoginPage.clcikLogin();       
    //cy.get(':nth-child(3) > .form-control').type(username)
    //cy.get(':nth-child(4) > .form-control').type(password) 
    //cy.get('form > .col-12 > .btn').click()
    })


Cypress.Commands.add('loginAndNavigate', (username, password, cssid, url) => {
        cy.login(username, password) // Assuming `cy.login` is already defined
        cy.get('.btn > .k-button-text').click()
        cy.visit('https://test-vt-lis.azurewebsites.net/registration-type')
        cy.get(cssid).click()  
        cy.visit(url)
})

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })