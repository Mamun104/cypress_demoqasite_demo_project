describe('Web table', () => {
    it('Click segment', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')
        cy.get(".card-body").eq(0).click();

    })
    it('Add web tables', () => {
        cy.get("#item-3").click();
        cy.get("#addNewRecordButton").click();
        cy.get("#firstName").type("Johny");
        cy.get("#lastName").type("Depp");
        cy.get("#userEmail").type("johnydepp@grr.la");
        cy.get("#age").type("28");
        cy.get("#salary").type("50000");
        cy.get("#department").type("Business");
        cy.get("#submit").click();
    
    })
    it('Edit web tables', () => {
        cy.get("[title=Edit]").eq(0).click();
        cy.get("#lastName").clear();
        cy.get("#lastName").type("Patrick");
        cy.get("#submit").click();
    
    })
})