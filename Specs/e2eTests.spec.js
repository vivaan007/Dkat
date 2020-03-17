var Homepage = require('../PageObjects/HomePage.po');
var ShoppingCart = require('../PageObjects/ShoppingCart.po');
var CheckOut = require('../PageObjects/CheckOut.po');
describe('Suite: E2E Tests', function() {
  beforeEach( function() {
    Homepage.open();
  })
  it('Test for Valid Card', function() {
    Homepage.waitToLoadPage();
    Homepage.clickBuyNow();
    ShoppingCart.clickCheckout();
    CheckOut.clickContinue();
    CheckOut.clickCreditCardOption();
    CheckOut.fillSuccessCard();
    CheckOut.validatePaymentSuccess();
  })
  it('Test for Invalid Card', function() {
    Homepage.waitToLoadPage();
    Homepage.clickBuyNow();
    ShoppingCart.clickCheckout();
    CheckOut.clickContinue();
    CheckOut.clickCreditCardOption();
    CheckOut.fillFailureCard();
    CheckOut.validatePaymentFailure();
  })
})