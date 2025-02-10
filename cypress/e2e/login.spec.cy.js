describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://test-vt-lis.azurewebsites.net/')
    cy.get(':nth-child(3) > .form-control').type('diwakar.negi@gmail.com')
    cy.get(':nth-child(4) > .form-control').type('Password~2024')
    cy.get('form > .col-12 > .btn').click()
    //cy.url().should('include', '/home')
    cy.get('.btn > .k-button-text').click()
    cy.url().should('include', '/registration-type')
  
  })
})