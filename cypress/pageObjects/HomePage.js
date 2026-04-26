class HomePage
{
    goTo(url){
        cy.visit(url)
    }
   login(userName, password ,role)
   {
        cy.get("#username").type(userName);
        cy.get("#password").type(password);
        cy.contains('label','Admin').click();
        cy.get('select').select(role);
        cy.get('#terms').check();
        cy.get('#signInBtn').click();
   }
}export default HomePage