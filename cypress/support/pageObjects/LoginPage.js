class LoginPage {
    visit() {
        cy.visit('https://test-vt-lis.azurewebsites.net/') // Visit URL
    }
   
    enterUserame() {
        cy.get(':nth-child(3) > .form-control').type(username) ; // Enter Username
      }
  enterPassword() {
    cy.get(':nth-child(4) > .form-control').type(password) ; // Enter password
  }
   clcikLogin() {
    cy.get('form > .col-12 > .btn').click();
  }
  
}

export default new LoginPage; // Export the class so that it can be imported in other files