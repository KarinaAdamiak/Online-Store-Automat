import Urls from "./urlsPage";

const myAccountHeaderButton= '#menu-item-100'
class HomePage{
    
clickMyAccountButton(){
    cy.get(myAccountHeaderButton).click()
}


visitPage(){
    const url= new Urls()     //object
    url.visitHomePage()
}



}

export default HomePage;