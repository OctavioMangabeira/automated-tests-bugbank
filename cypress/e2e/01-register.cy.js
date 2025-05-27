/// <reference types ='cypress'/>

import RegisterUser from '../support/pages/register/index';
import { VALID_DATA_NEW_USER } from "../fixtures/dataUtils"
import { INVALID_DATA_NEW_USER } from "../fixtures/dataUtils"

describe('Register User Tests', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Register user successfully', { tags: ['@basicflow'] }, () => {
        RegisterUser.registerNewUser(
            VALID_DATA_NEW_USER.EMAIL_VALID, 
            VALID_DATA_NEW_USER.NAME_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_CONFIRMATION_VALID
        );
        RegisterUser.validateRegisterUser();
    })

    it('Register user with invalid data', { tags: ['@additionalflow'] }, () => {
        RegisterUser.registerNewUser(
            INVALID_DATA_NEW_USER.EMAIL_INVALID,
            VALID_DATA_NEW_USER.NAME_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_VALID, 
            VALID_DATA_NEW_USER.PASSWORD_CONFIRMATION_VALID
        );
        RegisterUser.validateInvalidEmail();
    })
})