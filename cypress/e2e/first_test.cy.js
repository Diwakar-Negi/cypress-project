  describe('My First Test',  function()  {
    it('Click "type" navigate to a new url',  function() {
      //visit the page
      cy.visit('https://example.cypress.io')
      //Click on the link
      cy.contains('type').click()
      // Should be on a new URL which includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

      //Get the input element and type in it
      cy.get('.action-email')
        .type('fake@gmail.com')

      //Verify the value has been updated
      cy.get('.action-email')
      cy.wait(2000)
      cy.console.log('Happy Testing')
        .should('have.value', 'fake@gmail.com')    
    })   
    })
