import { ELEMENTS_REGISTER } from "../support/pages/register/elements";
import { ELEMENTS_LOGIN } from "../support/pages/login/elements";

Cypress.Commands.add('registerNewUser', (email, name, password, passwordConfirmation) => {
    cy.visit('/');
     cy.contains('button', 'Registrar').click();
            cy.get(ELEMENTS_REGISTER.divCardRegister).invoke('attr', 'style', 'transform: none; backface-visibility: visible');
            cy.get(ELEMENTS_REGISTER.divCardRegister).within(() => {
                cy.get(ELEMENTS_REGISTER.inputEmailCardRegister).type(email);
                cy.get(ELEMENTS_REGISTER.inputName).type(name);
                cy.get(ELEMENTS_REGISTER.inputPasswordCardRegister).type(password);
                cy.get(ELEMENTS_REGISTER.inputPasswordConfirmation).type(passwordConfirmation);
                cy.get(ELEMENTS_REGISTER.toggleAddBalanceToAccount).click();
                cy.get(ELEMENTS_REGISTER.buttonRegisterUser).click();
            })
            cy.get(ELEMENTS_REGISTER.divCardRegister).invoke('attr', 'style', '');
})

Cypress.Commands.add('login', (email, password) => {
    cy.get(ELEMENTS_LOGIN.divCardLogin).within(() => {
            cy.get(ELEMENTS_LOGIN.inputEmailCardLogin).type(email);
            cy.get(ELEMENTS_LOGIN.inputPassWordCardLogin).type(password);
            cy.contains('button', 'Acessar').click();
        })
})

Cypress.Commands.add('closeCreatedAccountModal', () => {
    cy.get(ELEMENTS_LOGIN.modalCreatedAccount).click();
})