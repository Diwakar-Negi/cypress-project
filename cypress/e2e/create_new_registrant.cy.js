describe('Create a different Registrant Type based on choose the Registrant Type ', () => {
    //beforeEach(() => {
      // Visit the initial page where the buttons are located
      //cy.fixture('testData').then(users); //=> {
        //cy.login(users.validuser.username, users.validuser.password);
        //cy.get('.btn > .k-button-text').click();
    //cy.visit('https://test-vt-lis.azurewebsites.net/registration-type');  
   // });    
  
    it('Register Lobbying Firm  when Lobbying Firm Registration is clicked', function () {
        cy.fixture('testData').then(function(users) {
            cy.loginAndNavigate(
                users.validuser.username,
                users.validuser.password,
                ':nth-child(8) > .registrant-type-button > .k-button > .k-button-text',
                'https://test-vt-lis.azurewebsites.net/create-registrant?type=3'
            );
        }) 
    });

    it('Register the Lobbyist Employer  when Lobbyist Employer Registration is clicked', function () {
        cy.fixture('testData').then(function(users) {
            cy.loginAndNavigate(
                users.validuser.username,
                users.validuser.password,
                ':nth-child(7) > .registrant-type-button > .k-button > .k-button-text',
                'https://test-vt-lis.azurewebsites.net/create-registrant?type=2'
            );
        }) 
    });

    it('Register the Lobbyist without a Firm  when Lobbyist without a Firm is clicked', function () {
        cy.fixture('testData').then(function(users) {
            cy.loginAndNavigate(
                users.validuser.username,
                users.validuser.password,
                ':nth-child(6) > .registrant-type-button > .k-button > .k-button-text',
                'https://test-vt-lis.azurewebsites.net/create-registrant?type=1'
            );
        }) 
    });

    it('Register the Lobbyist with a Firm  when Lobbyist With a Firm is clicked', function () {
        cy.fixture('testData').then(function(users) {
            cy.loginAndNavigate(
                users.validuser.username,
                users.validuser.password,
                ':nth-child(5) > .registrant-type-button > .k-button > .k-button-text',
                'https://test-vt-lis.azurewebsites.net/create-registrant?type=0'
            );
        }) 
    });
});
