/// <reference types ='cypress'/>

import { ELEMENTS_TRANSFER } from "./elements"

class transfer {
    static makeTransferNow(accountNumber, digit, transferValue, description) {
        cy.get(ELEMENTS_TRANSFER.inputAccountNumber).type(accountNumber);
        cy.get(ELEMENTS_TRANSFER.inputDigitAccount).type(digit);
        cy.get(ELEMENTS_TRANSFER.inputTransferValue).type(transferValue);
        cy.get(ELEMENTS_TRANSFER.inputDescription).type(description);
        cy.contains('button', 'Transferir agora').click();
    }

    static validateInvalidTransfer(textInvalidTransfer){
        cy.get(ELEMENTS_TRANSFER.pModalTextTransferInvalid).should('have.text', textInvalidTransfer)
    }
}

export default transfer