/// <reference types ='cypress'/>

import { ELEMENTS_LOGIN } from "./elements";

class Login {
    static loginUser(email, password) {
        cy.get(ELEMENTS_LOGIN.divCardLogin).within(() => {
            cy.get(ELEMENTS_LOGIN.inputEmailCardLogin).type(email);
            cy.get(ELEMENTS_LOGIN.inputPassWordCardLogin).type(password);
            cy.contains('button', 'Acessar').click();
        })
    }
}

export default Login
