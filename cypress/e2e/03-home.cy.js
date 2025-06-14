/// <reference types ='cypress'/>

import Home from '../support/pages/home/index';
import { VALID_DATA_NEW_USER } from "../fixtures/dataUtils";

describe('Home Tests', () => {

    before(() => {
         cy.registerNewUser (
            VALID_DATA_NEW_USER.EMAIL_VALID,
            VALID_DATA_NEW_USER.NAME_VALID,
            VALID_DATA_NEW_USER.PASSWORD_VALID,
            VALID_DATA_NEW_USER.PASSWORD_CONFIRMATION_VALID
        );
        cy.closeCreatedAccountModal();
        cy.login(
            VALID_DATA_NEW_USER.EMAIL_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_VALID,
        );
    })
    
    it('Click Button Transfer', { tags: ['@basicflow'] }, () => {
        Home.transferBalance();
    })
})