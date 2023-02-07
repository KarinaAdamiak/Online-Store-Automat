import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";



describe('new test scenario shopping cart',() =>{

    const homePage= new HomePage()
    const cartPage= new CartPage()
    const orderPage= new OrderPage()

    it('should order a product from the shop', function(){

        homePage.visitPage()
        homePage.addProductToCart()
        homePage.clickGoToCartFromProductButton()
        cartPage.checkThatAddedProductIsInCart()
        cartPage.clickTheGoToPaymentsButton()
        orderPage.fillAllRequiredFields()
        orderPage.clickOrderFinishButton()
        orderPage.checkOrderFinish()



    })
})