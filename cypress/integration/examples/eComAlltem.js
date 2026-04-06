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
        cy.url().should('include','shop');
        //Verifing shop page

        cy.get('h1.my-4').should('have.text','Shop Name');
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
                .should('contain', 'In Stock');
            }

            });
            cy.get(".text-right").invoke('text').then((text)=>{
                const totalPrice = text.match(/\d+/)[0]; 
                if(totalPrice<500000)
                {
                    cy.get(".btn-success").click();
                    cy.wait(2000);
                }

            })
            cy.get(".navbar-brand").should('contain.text','ProtoCommerce Home');
            cy.get('#country').type('ind')
            cy.wait(7000);
            cy.get('.suggestions a').each(($e1)=>{
                if($e1.text()==='India')
                {
                    cy.wrap($e1).click();
                }
            })
            cy.get('#checkbox2').check({ force: true });
            cy.get('.btn-success').click();
            cy.get('.alert-success').should('include.text','Success');
        
        
         
        
        // prod card
       // cy.get('#exampleInputEmail1') //quantity

    })

})