/// <reference types ='cypress'/>

import { ELEMENTS_LOGIN } from "../login/elements";

class RegisterUser {

    static validateRegisterUser() {
        cy.get(ELEMENTS_LOGIN.pModalText).invoke('text').should('match', /^A conta \d{3}-\d foi criada com sucesso$/);
    }

    static validateInvalidEmail() {
      cy.contains("p[class='input__warging']", "Formato inválido");
    }
}

export default RegisterUser;