import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CheckOut from "../../pageObjects/CheckOut";
describe("end to end test of Ecommerce website",()=>{

    before(function(){
        
         cy.fixture('example').then((data) =>{
            this.data = data;

        })
    
    })
    
    it("End to end Ec commerce functionality",function(){
        
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const checkOut = new CheckOut();
        
        homePage.goTo(this.data.url);
        homePage.login(this.data.userName, this.data.password, this.data.role)
        
       
        //Verifing shop page
        productPage.productUrl().should('include', this.data.shopUrl);
        productPage.getShopName().should('have.text',this.data.shopName);
        productPage.addProducts();
        productPage.checkOutButton().invoke('text').then((text) => {
        const noOfItemInCart = text.match(/\d+/)[0]; // extracts digits
        expect(Number(noOfItemInCart)).to.be.lessThan(5); 
        productPage.checkOutButton().click();


      
            for (let i = 0; i < Number(noOfItemInCart); i++) {
                 cy.get('tbody tr')
                .eq(i)
                .find('.text-success')
                .should('contain', this.data.checkStock);
            }

            });
            cy.get(".text-right").invoke('text').then((text)=>{
                const totalPrice = text.match(/\d+/)[0]; 
                if(totalPrice<500000)
                {
                    cy.get(".btn-success").click();
                    
                }

            })
            cy.get(".navbar-brand").should('contain.text',this.data.homePageName);
            cy.get('#country').type('ind')
            
            cy.get('.suggestions a').each(($e1)=>{
                if($e1.text()===this.data.country)
                {
                    cy.wrap($e1).click();
                }
            })
           
            checkOut.agree().check({ force: true });
            checkOut.purchase().click({ force: true });
            checkOut.alert().should('include.text',this.data.successMessage);
        
        
         
        
        // prod card
       // cy.get('#exampleInputEmail1') //quantity
      

    })
    after("close browswe",()=>{
       cy.log("test Finished");
    })

})