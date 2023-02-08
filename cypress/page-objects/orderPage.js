import { faker } from "@faker-js/faker"

const firstNameField='#billing_first_name'
const lastNameField='#billing_last_name'
const addressField='#billing_address_1'
const zipCodeField='#billing_postcode'
const cityField='#billing_city'
const phoneField='#billing_phone'
const emailField='#billing_email'
const finishOrderButton='#place_order'
const countryDropdown='#billing_country'
const countryDropdownPoland='Polska'

const stillToPay= '.cart-contents'
class OrderPage{
    fillAllRequiredFields(){
        cy.get(firstNameField).type(faker.name.firstName())
        cy.get(lastNameField).type(faker.name.lastName())
        cy.get(countryDropdown).select(countryDropdownPoland, {force:true})
        cy.get(addressField).type(faker.address.streetAddress())
        cy.get(zipCodeField).type(faker.address.zipCode('##-###'))
        cy.get(cityField).type(faker.address.city())
        cy.get(phoneField).type(faker.phone.number('+48#########'))
        cy.get(emailField).type(faker.internet.email())
        
    }    
    clickOrderFinishButton(){
        cy.get(finishOrderButton).click()
   }   
   checkOrderFinish(){
        cy.contains('Zamówienie otrzymane',{timeout:30000}).should('exist')
        cy.get(stillToPay).contains('0,00')

    }

}









export default OrderPage