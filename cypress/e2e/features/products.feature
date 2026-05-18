Feature: Ecommerce End to End Flow

  Scenario: Successful purchase flow
    Given I open the shop website
    And I add products to cart
    And I validate cart items and proceed to checkout
    And I complete the purchase
    Then I should see success message