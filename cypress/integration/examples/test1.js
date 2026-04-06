// test case is called as spec file
describe("My first test suite",()=>{
    it("first test case",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get("input[type='search']").type("ca");
        cy.get(".search-button").click();
           //using parent child chaining
        cy.get(".products").as('productLocator'); //aliasing
        cy.get("@productLocator").find(".product").should('have.length',4);
        
        cy.get('@productLocator').find(".product").each(($e1,index, $list)=>{
           let testofProductName = $e1.find('h4.product-name').text();
           if (testofProductName.includes('Carrot'))
           {
           cy.wrap ($e1).find('button').click()
           }
        })
        cy.get('.brand').should('have.text', 'GREENKART');
        cy.get('.brand').then(function(logoElement)
        {
             logoElement.text()
             cy.log(logoElement.text())
        })
        

      

      

        
        
    



    }) 
})