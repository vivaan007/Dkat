var Homepage = require('../PageObjects/HomePage.po');
var ShoppingCart = require('../PageObjects/ShoppingCart.po');
var CheckOut = require('../PageObjects/CheckOut.po');
describe('Suite: E2E Tests', function() {
  it('should open Home Page of App', function() {
    Homepage.open();
  })
  it('Test for Valid Card', function() {
    Homepage.waitToLoadPage();
    Homepage.clickBuyNow();
    ShoppingCart.clickCheckout();
    CheckOut.clickContinue();
    CheckOut.clickCreditCardOption();
    CheckOut.fillSuccessCard();

  })
})