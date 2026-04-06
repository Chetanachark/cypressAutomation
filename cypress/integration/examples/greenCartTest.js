// test case is called as spec file
describe("GreenCart E2E test",()=>{
    beforeEach(()=>{
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
})
    it("adding item to cart",()=>{
       
        cy.get("input[type='search']").type("ca");
        cy.get(".search-button").click();
           //using parent child chaining
        cy.get(".products").as('productLocator'); //aliasing
      
        cy.get('@productLocator').find(".product").each(($e1,index, $list)=>{
           let testofProductName = $e1.find('h4.product-name').text();
           if (testofProductName.includes('Carrot'))
           {
           cy.wrap ($e1).find('button').click()
           }
        })
        
        cy.get('.cart-icon').click();
         cy.get('.cart-items').as('cartItems')
        cy.get('@cartItems').find('.cart-item:visible').should('have.length',1);
        cy.get('@cartItems').find('.product-name').should('contain.text','Carrot');
        cy.get('.action-block:visible').find("button[type='button']").click();
        cy.get('tbody tr:nth-child(1) td:nth-child(2)').should('contain.text','Carrot');
        cy.get('.promoCode').type('xyz');
        cy.get('.promoBtn').click();
        cy.wait(4000);
        cy.get('.promoInfo').should('contain.text','Invalid code');
        cy.contains("Place Order").click();
        cy.get('.chkAgree').check().should('be.checked');
        
        //static dropdown
        cy.get('select').select(['Andorra','']).should('have.value','Andorra');
        
    }) 
    
    
})