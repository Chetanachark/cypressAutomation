class CheckOut{
    agree(){
      return cy.get('#checkbox2');
    }
    purchase(){
        return   cy.get('.btn-success');
    }
    alert(){
        return cy.get('.alert-success');
    }
  

}export default CheckOut