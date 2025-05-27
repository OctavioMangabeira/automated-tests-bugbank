/// <reference types ='cypress'/>

import Login from "../support/pages/login";
import { VALID_DATA_NEW_USER } from "../fixtures/dataUtils";
import RegisterUser from '../support/pages/register';

describe('Logins Tests', () => {

    it('Login Successfully', { tags: ['@basicflow'] }, () => {
        cy.visit('/');
        RegisterUser.registerNewUser(VALID_DATA_NEW_USER.EMAIL_VALID,
            VALID_DATA_NEW_USER.NAME_VALID,
            VALID_DATA_NEW_USER.PASSWORD_VALID,
            VALID_DATA_NEW_USER.PASSWORD_CONFIRMATION_VALID);
        cy.get("a[id='btnCloseModal']").click();
        Login.loginUser(
            VALID_DATA_NEW_USER.EMAIL_VALID,
            VALID_DATA_NEW_USER.PASSWORD_VALID,
        );
    })
})