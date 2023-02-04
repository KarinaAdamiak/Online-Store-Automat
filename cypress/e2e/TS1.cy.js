import HomePage from "../page-objects/homePage";
import MyAccount from "../page-objects/myAccountPage";

describe('login on user account',()=>{

const homePage= new HomePage();
const accountPage= new MyAccount();

before(function() {

cy.fixture('users.json').as('userData')


})

it('should login to the application', function() {
    homePage.clickMyAccountButton()
    accountPage.fillUserNameEmailInputWithEmail(this.userData.email)
    accountPage.fillPasswordField(this.userData.password)
    accountPage.clickLoginButton()
})

it('should login to the application', function() {





})})