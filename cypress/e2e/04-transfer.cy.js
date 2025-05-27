/// <reference types ='cypress'/>

import transfer from "../support/pages/transfer";
import Home from '../support/pages/home/index';
import { VALID_DATA_NEW_USER } from "../fixtures/dataUtils";
import { INVALID_DATA_TRANSFER, USER_WARNING_TEXTS } from "../fixtures/dataUtils";

describe('Transfer Tests', () => {

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
        Home.transferBalance();
    })
    it('Transfer to a nonexistent account', { tags: ['@additionalflow'] }, () => {
        transfer.makeTransferNow(
            INVALID_DATA_TRANSFER.ACCOUNT_NUMBER_INVALID,
            INVALID_DATA_TRANSFER.DIGIT_INVALID_ACCOUNT_NUMBER,
            INVALID_DATA_TRANSFER.TRANSFER_VALUE,
            INVALID_DATA_TRANSFER.DESCRIPTION_TRANSFER
        );
        transfer.validateInvalidTransfer(USER_WARNING_TEXTS.TEXT_INVALID_TRANSFER);
    })
})