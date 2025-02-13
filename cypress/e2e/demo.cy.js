describe('My First Test', () => {
  it('shold validate dynamic table data', () => {
    
    cy.intercept('GET', 'api/data').as('getData')

    //visit the page 
    cy.visit('https://example.cypress.io/commands/network-requests')
    //click on the button
    cy.wait('@getData')
    cy.get('table tr').should('have.length', 4); // check the number of rows
    cy.get('table tr').eq(1).should('contain', '1'); // check the content of the first row

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Your request is: GET');
    })

    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Do you confirm?');
      return true;
    })
  })
})

