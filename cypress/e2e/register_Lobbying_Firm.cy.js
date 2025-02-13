describe('Register a new Lobbying Firm Registrant Type', () => {
    beforeEach(() => {
      // Visit the initial page where the buttons are located
        cy.fixture('testData').then(users); => {
            cy.login(users.validuser.username, users.validuser.password);
            cy.get('.btn > .k-button-text').click();
            cy.visit('https://test-vt-lis.azurewebsites.net/registration-type');  
        };   
    }); 
  
    it('Register Lobbying Firm  when Lobbying Firm Registration is clicked', () => {
        /* cy.fixture('testData').then((users) =>  {
            cy.loginAndNavigate(
                users.validuser.username,
                users.validuser.password,
                ':nth-child(8) > .registrant-type-button > .k-button > .k-button-text',
                'https://test-vt-lis.azurewebsites.net/create-registrant?type=3'
            ); */

            cy.get(':nth-child(8) > .registrant-type-button > .k-button > .k-button-text').click();
            cy.visit('https://test-vt-lis.azurewebsites.net/create-registrant?type=3');  

            // Step 1: Fill in personal details
            cy.get('#firstField').type('NVIDIA');
            cy.get('#thirdField').type('Jensen Huang');
            cy.get('#d69336a3-c9ea-421c-8166-b9c9f0244e61').type('jensen.huang@example.com');
            cy.get('[data-layer="Content"]').click();
            //cy.visit('https://test-vt-lis.azurewebsites.net/create-registrant?type=3');
            //cy.url().should('include', '/create-registrant?type=3');
        
            // Step 2: Fill in address details
        //     cy.get('#address').type('123 Main St');
        //     cy.get('#city').type('New York');
        //     cy.get('#next-button').click();
        
        //     // Step 3: Review and submit
        //     cy.contains('Review Your Details').should('be.visible');
        //     cy.get('#submit-button').click();
        
        //     // Assert success message
        //     cy.contains('Form submitted successfully').should('be.visible');
    //});
    });
});