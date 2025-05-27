/// <reference types ='cypress'/>

import { ELEMENTS_REGISTER } from "./elements";
import { ELEMENTS_LOGIN } from "../login/elements";

class RegisterUser {
    static registerNewUser(email, name, password, passwordConfirmation) {
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
    }

    static validateRegisterUser() {
        cy.get(ELEMENTS_LOGIN.pModalText).invoke('text').should('match', /^A conta \d{3}-\d foi criada com sucesso$/);
    }

    static validateInvalidEmail() {
      cy.contains("p[class='input__warging']", "Formato inválido");
    }
}

export default RegisterUser;