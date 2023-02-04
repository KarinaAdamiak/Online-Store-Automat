import Urls from "./urlsPage";


const userNameEmailField='#username'
const passwordFiled= '#password'
const loginButton= 'button[name="login"]'
const MyAccountNavigation='.woocommerce-MyAccount-navigation'
const errorMessage= 'ul[role="alert"]'

class MyAccount{
  fillUserNameEmailInputWithEmail(email){
    cy.get(userNameEmailField).type(email)

  }
  fillPasswordField(password){
    cy.get(passwordFiled).type(password)

  }
  clickLoginButton(){
    cy.get(loginButton).click()

  }
  checkVisibilityOfMyAccountNavigation(){
    cy.get(MyAccountNavigation).should('be.visible')

  }
  visitMyAccountPage(){
    const url= new Urls
    url.visitMyAccountPage()

  }
  checkVisibilityOfErrorMessageAfterIncorrectLogin(){
    cy.get(errorMessage).should('be.visible')
  }
}
export default MyAccount;