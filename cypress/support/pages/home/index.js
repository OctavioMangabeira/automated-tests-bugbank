/// <reference types ='cypress'/>

import { ELEMENTS_HOME } from "./elements";

class Home {
    static transferBalance() {
        cy.get(ELEMENTS_HOME.aTransfer).click();
    }
}

export default Home