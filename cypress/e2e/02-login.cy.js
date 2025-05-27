/// <reference types ='cypress'/>

import { VALID_DATA_NEW_USER } from "../fixtures/dataUtils";


describe('Logins Tests', () => {

     before(() => {
        cy.registerNewUser (
            VALID_DATA_NEW_USER.EMAIL_VALID,
            VALID_DATA_NEW_USER.NAME_VALID,
            VALID_DATA_NEW_USER.PASSWORD_VALID,
            VALID_DATA_NEW_USER.PASSWORD_CONFIRMATION_VALID
        );
        cy.closeCreatedAccountModal();
    })

    it('Login Successfully', { tags: ['@basicflow'] }, () => {
        cy.login(
            VALID_DATA_NEW_USER.EMAIL_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_VALID,
        );
    })
})