describe("handling calenders",()=>{
    beforeEach("load url", ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/");

    })
    it("date chooser from calender pop up",()=>{
        cy.get("a[href='#/offers']").invoke('removeAttr','target').click()
        cy.get('.redLogo').should('contain','KART');

        //Picking up date
        const year = 2025;
        const month = 7;
        const date =25;
        const expectedList = [month,date,year]
        cy.get(".react-date-picker__calendar-button").click();
        cy.get(".react-calendar__navigation__label").click()
        cy.get(".react-calendar__navigation__label").click()
        cy.contains("button",year).click()
        cy.get(".react-calendar__year-view__months__month").eq(month-1).click();
        cy.contains("button abbr",date).click();

        //assertingDate
        cy.get(".react-date-picker__inputGroup__input").each(($el1, index,$list)=>{
        cy.wrap($el1)
      .invoke('val')
      .then((value) => {   
        expect(value).be.equal(expectedList[index].toString());
      })

       
       })
        


        
    })
})