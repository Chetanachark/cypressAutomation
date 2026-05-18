Cypress.Commands.add("loginSSO", () => {
  cy.session("sso-user", () => {

    cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")

    cy.get("#username").type("rahulshettyacademy")
    cy.get("#password").type("Learning@830$3mK2")
    cy.contains('label','Admin').click();
    cy.get('select').select('Student');
    cy.get('#terms').check();
    cy.get('#signInBtn').click();

   
    cy.url().should("include", "/shop")
  })
})