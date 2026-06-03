const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import HomePage from "../../pageObjects/HomePage";
import ProductPage from "../../pageObjects/ProductPage";
import { readCSV } from "../../../support/csvHelper"

const homePage = new HomePage();
const productPage = new ProductPage();

before("loading fixture",()=>{
    cy.fixture(example).then((data)=>{
        const fixtureData = data;

    });
    readCSV("users.csv").then((data)=>{
        const csvData = data;

    })

})

Given("I visit url",()=>{
   cy.visit("https://rahulshettyacademy.com/loginpagePractise/#")

})
When("I enter credentials and hit login button",()=>{
    cy.log(csvData[0].username)
   // homePage.getUserName(csvData[0]);


})
Then("I see products page",()=>{
    cy.log(csvData[0].password)
})


