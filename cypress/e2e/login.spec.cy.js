describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://test-vt-lis.azurewebsites.net/')
});

  it('should log in successfully', () => {
    cy.fixture('testData').then((data) => {
      cy.get(':nth-child(3) > .form-control').type(data.validUser.username)
      cy.get(':nth-child(4) > .form-control').type(data.validUser.password)
      cy.login(data.validUser.username, data.validUser.password)

      //cy.login(cy.get(':nth-child(3) > .form-control').type(data.username), cy.get(':nth-child(4) > .form-control').type(data.password))
    });
    
    //cy.get(':nth-child(3) > .form-control').type('diwakar.negi@gmail.com')
    //cy.get(':nth-child(4) > .form-control').type('Password~2024')
    cy.get('form > .col-12 > .btn').click()
    //cy.url().should('include', '/home')
    cy.get('.btn > .k-button-text').click()
    //cy.url().should('include', '/registration-type')
    cy.visit('https://test-vt-lis.azurewebsites.net/registration-type')
  
    })
  })
