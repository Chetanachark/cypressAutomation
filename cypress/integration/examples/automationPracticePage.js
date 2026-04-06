describe("automation practice page",()=>{

    beforeEach("load the url",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    })
    it("practicing on different UI elements",()=>{

        //Selecting single check box and asserting the same
         cy.get("input[type='checkbox']").check('option1').should('be.checked');
        // selecting check boxes
        cy.get("input[type='checkbox']").check(['option2','option3']);

        //Handking static Dropdown
        cy.get('select').select('option2').should('have.value','option2');

        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').each(($e1, index, $lisy)=>{
            if($e1.text()==='India')
            {
                cy.wrap($e1).click()
            }

        })
        //Visible /Invisible elements
        cy.get('#autocomplete').should('have.value','India');
        cy.get('#displayed-text').should('be.visible');
        cy.get("#hide-textbox").click();
         cy.get('#displayed-text').should('not.be.visible');

         //Radio buttons
         cy.get("input[value='radio1']").check().should('be.checked');

         //window alert
         cy.get("#alertbtn").click();
         cy.on('window:alert',(str)=>{
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
           
         })

         //window confirm
          cy.get('#confirmbtn').click()
          cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
          })


          



      

    })
})