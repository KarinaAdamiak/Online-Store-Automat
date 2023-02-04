import HomePage from "../page-objects/homePage";
import MyAccount from "../page-objects/myAccountPage";
import { faker } from '@faker-js/faker';


describe('login on user account',()=>{

const homePage= new HomePage();
const accountPage= new MyAccount();

before(function() {

cy.fixture('users.json').as('userData')


})

it('should login to the application', function() {
    homePage.visitPage()
    homePage.clickMyAccountButton()
    accountPage.fillUserNameEmailInputWithEmail(this.userData.email)
    accountPage.fillPasswordField(this.userData.password)
    accountPage.clickLoginButton()
    accountPage.checkVisibilityOfMyAccountNavigation()
})

it('should not login to the application', function() {
    accountPage.visitMyAccountPage()
    accountPage.fillUserNameEmailInputWithEmail(faker.internet.email())
    accountPage.fillPasswordField(faker.internet.password())
    accountPage.clickLoginButton()
    accountPage.checkVisibilityOfErrorMessageAfterIncorrectLogin()



})})