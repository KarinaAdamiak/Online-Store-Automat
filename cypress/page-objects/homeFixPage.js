
import Urls from "./urlsPage";


const myAccountHeaderButton= '#menu-item-100'
const blockNameNew='div[data-block-name="woocommerce/product-new"]'
const checkcartFromProductLevel='.added_to_cart.wc-forward'


class HomeFixPage{
    
    
    addProductToCart(productsData){
        cy.get(blockNameNew).within(()=>{
        cy.get(productsData).click()
       
                })  
        
    }
    clickGoToCartFromProductButton(){
            cy.get(blockNameNew).within(()=>{    
            cy.get(checkcartFromProductLevel).first().click()
            })
    }
    visitPage(){
        const url= new Urls()     
        url.visitHomePage()
    }
    }
export default HomeFixPage;