var Homepage = function () {

  var btnBuyNow = 'a.btn.buy';

  this.open = async function () {
    await browser.maximizeWindow()
    await browser.url('https://demo.midtrans.com/');

  };

  this.clickBuyNow = function () {
    $(btnBuyNow).click()
  }

  this.waitToLoadPage = function () {
    $(btnBuyNow).waitForDisplayed(5000);
  };

};
module.exports = new Homepage();