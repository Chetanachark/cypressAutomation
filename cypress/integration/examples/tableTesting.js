describe("automating tables",()=>{
    beforeEach("load URL",()=>{

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

     it("chcking price of a purticular course",()=>{
         cy.get(".table-display tr td:nth-child(2)").each(($el1,index,$list)=>{
            const courseText = $el1.text();
            if(courseText.includes('python'))
            {
              cy.get('.table-display tr td:nth-child(2)',{timeout:10000}).eq(index).next()
              .then((price)=>{
              const priceText = price.text()
              expect(priceText).to.equal('25')
              cy.log('verifid')
              
            
             })
            }
    
        
    
            
        

        })
    })

})
