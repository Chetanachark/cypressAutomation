describe("end to end test of Ecommerce website",()=>{

    before(function(){
        
         cy.fixture('example').then((data) =>{
            this.data = data;

        })
    
    })
    
    it("End to end Ec commerce functionality",function(){
        
        cy.visit(this.data.url)
        cy.get("#username").type(this.data.userName);
        cy.get("#password").type(this.data.password);
        cy.contains('label','Admin').click();
        cy.get('select').select(this.data.role);
        cy.get('#terms').check();
        cy.get('#signInBtn').click();
        
        cy.url().should('include',this.data.shopUrl);
        //Verifing shop page

        cy.get('h1.my-4').should('have.text',this.data.pageName);
        cy.get('.card.h-100').find('.btn').each(($e1, index, $list)=>{
            cy.wrap($e1).click();
            
        })
        cy.get('.btn-primary') .invoke('text').then((text) => {
        const number = text.match(/\d+/)[0];   // extracts digits
        cy.get('.btn-primary').click();
            for (let i = 0; i < number; i++) {
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
            cy.get('#checkbox2').check({ force: true });
            cy.get('.btn-success').click({ force: true });
            cy.get('.alert-success').should('include.text',this.data.successMessage);
        
        
         
        
        // prod card
       // cy.get('#exampleInputEmail1') //quantity
      

    })
    after("close browswe",()=>{
       cy.log("test Finished");
    })

})