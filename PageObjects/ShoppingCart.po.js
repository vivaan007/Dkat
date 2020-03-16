var ShoppingCart = function () {

    var btnCheckout = '.cart-checkout';

    this.clickCheckout = function () {
        $(btnCheckout).click()
    }

};
module.exports = new ShoppingCart();