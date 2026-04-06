describe("handling child window or a tab",()=>{
    beforeEach("load Parent tab",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })
    it("automating child wildows",()=>{
        cy.get('.blinkingText').then((ele)=>{
            const url= ele.prop('href')
            cy.log(url);
            cy.origin("https://www.firefox.com/en-US/thanks/", ()=>{
                cy.log('into a child window');
            })
            // cy.visit(url)
        })
            //child window test goes here


        

        
    

    })
})