import 'cypress-iframe'
describe("Handling Iframes",()=>{

    beforeEach("load url",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    })

    //ifrom having different domail
    it("handling iframe within an page",()=>{
        cy.get('#courses-iframe').then(($iframe)=>{
            const iframeUrl = $iframe.prop('src')
            const url = new URL(iframeUrl);
            const origin = url.origin;
            const path = url.pathname;
           cy.origin(origin, { args: { path } }, ({ path })=>{
                cy.visit(path);
                cy.get("a[href='mentorship']").eq(0).click();
            })
            
            

        })
       // cy.iframe().find("a[href='mentorship']").eq(0).click();

    })

})