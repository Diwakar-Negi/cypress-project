import LoginPage from '../support/pageObjects/LoginPage.js';

describe('Login Test using POM', () => {
   beforeEach(() => {
    cy.fixture('testData').then((users) => {
      LoginPage.visit();
      LoginPage.enterUserame(users.validuser.username); 
      LoginPage.enterPassword(users.validuser.password);
      LoginPage.clcikLogin();
    });
}); 

/* it('should log in successfully', () => {
    cy.fixture('testData').then((users) => {
      LoginPage.visit();
      LoginPage.enterUserame(users.validuser.username); 
      LoginPage.enterPassword(users.validuser.password);
      LoginPage.clcikLogin();
    });
  });  */
});