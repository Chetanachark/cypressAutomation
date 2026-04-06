describe("end to end test of Ecommerce website",()=>{

    beforeEach("Load E-commerce website ",()=>{
        cy.visit("https://rahulshettyacademy.com/loginpagePractise/#");
    
    })
    it("End to end Ec commerce functionality",()=>{
        const productName = ['Nokia','iphone'];
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
        cy.get('app-card').should('have.length',4);
        
        cy.contains('app-card', productName[0]).contains('button', 'Add').click();
         cy.contains('app-card', productName[1]).contains('button', 'Add').click();
         cy.get('.btn-primary').click();
         let sum = 0;
         cy.get('tr td:nth-child(4) strong').each(($el1,index,$list)=>{
            const total = Number($el1.text().split(' ')[1].trim())
             sum= sum+total;
            
         }).then(()=>{
              cy.get('.text-right').invoke('text').then((text)=>{
             const totalAmount=  Number(text.split(' ')[1].trim());
            expect(sum).be.equal(totalAmount);

            })
            
          
            
         })
         cy.get(".btn-success").click();
                    cy.wait(2000);
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


       

    })

})