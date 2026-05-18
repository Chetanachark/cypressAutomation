const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import CheckOut from "../../pageObjects/CheckOut";

const homePage = new HomePage();
const productPage = new ProductPage();
const checkOut = new CheckOut();

let testData;

before(() => {
  cy.fixture("example").then((data) => {
    testData = data;
  });
});
beforeEach("adding session",() => {
  cy.loginSSO()
  cy.log("session added");
})

Given("I open the shop website", () => {
  homePage.goTo(testData.url);
});

When("I add products to cart", () => {
  productPage.addProducts();
});

Then("I validate cart items and proceed to checkout", () => {
  productPage.checkOutButton().invoke("text").then((text) => {
    const noOfItemInCart = Number(text.match(/\d+/)[0]);

    expect(noOfItemInCart).to.be.lessThan(5);

    productPage.checkOutButton().click();

    for (let i = 0; i < noOfItemInCart; i++) {
      cy.get("tbody tr")
        .eq(i)
        .find(".text-success")
        .should("contain", testData.checkStock);
    }
  });

  cy.get(".text-right").invoke("text").then((text) => {
    const totalPrice = Number(text.match(/\d+/)[0]);

    if (totalPrice < 500000) {
      cy.get(".btn-success").click();
    }
  });
});

Then("I complete the purchase", () => {
  cy.get(".navbar-brand").should(
    "contain.text",
    testData.homePageName
  );

  cy.get("#country").type("ind");
  cy.get(".suggestions a", { timeout: 10000 })
  
  cy.get(".suggestions a").each(($el) => {
    if ($el.text() === testData.country) {
      cy.wrap($el).click();
    }
  });

  checkOut.agree().check({ force: true });
  checkOut.purchase().click({ force: true });
});

Then("I should see success message", () => {
  checkOut
    .alert()
    .should("include.text", testData.successMessage);
});