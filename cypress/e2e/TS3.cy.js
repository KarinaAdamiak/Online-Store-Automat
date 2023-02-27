import HomeFixPage from "../page-objects/homeFixPage";
import MyAccount from "../page-objects/myAccountPage";
import CartFixPage from "../page-objects/cartFixPage";


describe('login on user account',()=>{

const homeFixPage= new HomeFixPage();
const accountPage= new MyAccount();
const cartFixPage=new CartFixPage()

before(function() {

cy.fixture('products').as('productsData')

})

it('FIXTURES should add product to cart and delete it from there', function() {
    homeFixPage.visitPage()
    homeFixPage.addProductToCart(this.productsData.locator,{timeout:5000})
    homeFixPage.addProductToCart(this.productsData.locator1,{timeout:5000})
    homeFixPage.addProductToCart(this.productsData.locator2,{timeout:5000})
    cy.wait(5000)
    homeFixPage.clickGoToCartFromProductButton(this.productsData.locator,{timeout:10000})  
    cartFixPage.checkThatAddedProductIsInCart(this.productsData)
    cartFixPage.removeItemFromCart()
    cartFixPage.checkThatCartIsEmpty()


    })})