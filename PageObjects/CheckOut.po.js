var CardData = require('../cardData.json')
var CheckOutComponent = function () {

    var btnContinue = ".button-main";
    var optionCreditCard = "a[href*='credit-card'";
    var txtCardNumber = "input[name='cardnumber']";
    var txtExpiryDate = "input[placeholder*='MM']";
    var txtCVV = "input[placeholder='123']"

    this.clickContinue = function () {
        browser.pause(5000)
        browser.debug()
        $(btnContinue).waitForDisplayed(8000);
        $(btnContinue).click()
    }
    this.clickCreditCardOption = function () {
        $(optionCreditCard).click()
    }
    this.fillSuccessCard = function () {
        $(txtCardNumber).setValue(CardData["SuccessCard"]["cardNumber"])
        $(txtExpiryDate).setValue(CardData["SuccessCard"]["expiryDate"])
        $(txtCVV).setValue(CardData["SuccessCard"]["cvv"])
    }

};
module.exports = new CheckOutComponent();