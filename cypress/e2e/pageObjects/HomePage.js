class HomePage
{
    goTo(url){
        cy.visit(url)
    }

    getUserName(userName){
        return cy.get("#username").type(userName);
    }
    getPassword(password){
        return cy.get("#password").type(password);
    }
    selectAdmin(){
        return cy.contains('label','Admin').click();
    }
     selectUser(){
        return cy.contains('label','Admin').click();
    }
    getRole(role){
      return cy.get('select').select(role);

    }
    checkoutTerms(){
        return cy.get('#terms').check();
    }
    hitSignIn(){
        return cy.get('#signInBtn').click();
    }
  
}export default HomePage