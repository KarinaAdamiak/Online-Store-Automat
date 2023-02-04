import Urls from "./urlsPage";


const userNameEmailField='#username'
const passwordFiled= '#password'
const loginButton= 'button[name="login]'
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
  visitMyAccountPage(){
    const url= new Urls
    url.visitMyAccountPage()

  }
}
export default MyAccount;