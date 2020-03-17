var CardData = require('../cardData.json')
var CheckOutComponent = function () {

  var btnContinue = ".button-main";
  var optionCreditCard = "a[href*='credit-card'";
  var txtCardNumber = "input[name='cardnumber']";
  var txtExpiryDate = "input[placeholder*='MM']";
  var txtCVV = "input[placeholder='123']";
  var txtBankOTP = "input[type='password']";
  var frameCheckOut = "#snap-midtrans";
  var frameOTP = "iframe[src*='token']"
  var btnSubmit = "button[type='submit']";
  var msgSuccess = "div.trans-status.trans-success";
  var msgFailure = ".text-failed.text-bold"

  this.clickContinue = function () {
    browser.pause(5000)
    browser.switchToFrame($(frameCheckOut));
    //$(btnContinue).waitForDisplayed(8000);
    $(btnContinue).click()
  }
  this.clickCreditCardOption = function () {
    $(optionCreditCard).click()
  }
  this.fillSuccessCard = function () {
    $(txtCardNumber).setValue(CardData["SuccessCard"]["cardNumber"])
    $(txtExpiryDate).setValue(CardData["SuccessCard"]["expiryDate"])
    $(txtCVV).setValue(CardData["SuccessCard"]["cvv"])
    $(btnContinue).click()
    browser.pause(5000)
    browser.switchToFrame($(frameOTP));
    $(txtBankOTP).waitForDisplayed(10000);
    $(txtBankOTP).setValue(CardData["SuccessCard"]["bankOTP"])
    $(btnSubmit).click()
  }
  this.fillFailureCard = function () {
    $(txtCardNumber).setValue(CardData["FailureCard"]["cardNumber"])
    $(txtExpiryDate).setValue(CardData["FailureCard"]["expiryDate"])
    $(txtCVV).setValue(CardData["FailureCard"]["cvv"])
    $(btnContinue).click()
    browser.pause(5000)
    browser.switchToFrame($(frameOTP));
    $(txtBankOTP).waitForDisplayed(10000);
    $(txtBankOTP).setValue(CardData["FailureCard"]["bankOTP"])
    $(btnSubmit).click()
  }
  this.validatePaymentSuccess = function () {
    browser.switchToParentFrame()
    $(msgSuccess).waitForDisplayed(12000)
  }
  this.validatePaymentFailure = function () {
    browser.switchToParentFrame()
    $(msgFailure).waitForDisplayed(12000)
  }

};
module.exports = new CheckOutComponent();