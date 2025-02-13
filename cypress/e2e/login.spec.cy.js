describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('https://test-vt-lis.azurewebsites.net/')
});

  it('should log in successfully', () => {
    cy.fixture('testData').then((users) => {
      cy.login(users.validuser.username, users.validuser.password);
      //cy.get('.btn > .k-button-text').click()
      //cy.visit('https://test-vt-lis.azurewebsites.net/registration-type')  
      })
    })
  })

/*   it('should fail to log in', () => {
    cy.fixture('testData').then((users) => {
      cy.login(users.invaliduser.username, users.invaliduser.password);
      cy.get('.alert').should('be.visible');
      })
    }); */
