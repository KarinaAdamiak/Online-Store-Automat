
const productName= '.woocommerce-cart-form'
const removeItemButton='.remove'
const table='table[class="shop_table"]'
const emptyCartAlert= '.cart-empty.woocommerce-info'
const goToPaymentsButton= '.checkout-button'

import productsData from '../fixtures/products.json'


class CartFixPage{

  
        checkThatAddedProductIsInCart(productsData){
        
        cy.get(productName).contains(productsData.name).should('exist').and ('include.text', "Hoodie with Zipper")
        cy.get(productName).contains(productsData.name1).should('exist').and ('include.text', "Polo")
        cy.get(productName).contains(productsData.name2).should('exist').and ('include.text', "Sunglasses")
    }
  
    
    removeItemFromCart(){
        cy.get(removeItemButton).eq(0).click()
            cy.wait(2000)
        cy.get(removeItemButton).eq(0).click()
            cy.wait(2000)
        cy.get(removeItemButton).eq(0).click()

        
    }
    checkThatCartIsEmpty(){
        cy.get(emptyCartAlert).should('exist')
    }
}
   



export default CartFixPage;