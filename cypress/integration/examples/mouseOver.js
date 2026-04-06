describe("handling mousover",()=>{


    beforeEach("load the url",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })

    it("mouseover",()=>{
        


        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click({force: true});
        cy.url().should('include','top');

         cy.get('.mouse-hover-content').invoke('show')  //invok
        cy.contains('Reload').click({force: true});
        cy.url().should('not.include','top');

    })
})