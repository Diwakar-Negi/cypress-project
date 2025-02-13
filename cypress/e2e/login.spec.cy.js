import LoginPage from '../pageobjects/LoginPage.js';

describe('Login Test using POM', () => {
 /*  beforeEach(() => {
    cy.visit('https://test-vt-lis.azurewebsites.net/')
});

  it('should log in successfully', () => {
    cy.fixture('testData').then((users) => {
      cy.login(users.validuser.username, users.validuser.password);
      //cy.get('.btn > .k-button-text').click()
      //cy.visit('https://test-vt-lis.azurewebsites.net/registration-type')  
      })
    }) */

it('should log in successfully', () => {
    cy.fixture('testData').then((users) => {
      LoginPage.visit();
      LoginPage.enterUserame(users.invaliduser.username); 
      LoginPage.enterPassword(users.invaliduser.password);
      LoginPage.clcikLogin();
      //cy.login(users.invaliduser.username, users.invaliduser.password);
      //cy.get('.alert').should('be.visible');
    });
  }); 
});