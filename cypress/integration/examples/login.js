describe("end to end test of Ecommerce website",()=>{

    beforeEach("Load E-commerce website ",()=>{
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
    
    })
    it("End to end Ec commerce functionality",()=>{
        cy.get("#username").type('rahulshettyacademy');
        cy.get("#password").type('Learning@830$3mK2');
        cy.contains('label','Admin').click();
        cy.get('select').select('Student');
        cy.get('#terms').check();
        cy.get('#signInBtn').click();
        cy.wait(4000);
        cy.url().should('include','shop');// after switching next tab
    })
})