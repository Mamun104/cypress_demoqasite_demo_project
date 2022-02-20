require('cypress-xpath');

describe('Fillup web form', () => {
    it('Fillup web form', () => {
        cy.visit('https://demoqa.com/automation-practice-form')
        cy.title().should('eq', 'ToolsQA')
        cy.url().should('include', '/automation-practice-form')
        cy.get("#firstName").type("Test");
        cy.get("#lastName").type("User");
        let email = "test" + getRandomNumber(10000, 99999) + "@grr.la";
        cy.get("#userEmail").type(email);
        cy.xpath("//label[contains(text(),'Male')]").click();
        cy.get("#userNumber").type("1502020110");
        cy.get(".custom-checkbox").eq(2).click();
        const filepath = 'files/salman.png'
        cy.get('#uploadPicture').attachFile(filepath);
        cy.get("#state").click();
        cy.get("#state").type("NCR");
        cy.get("#state").type('{downarrow}');
        cy.get("#state").type('{enter}');
        cy.get('#close-fixedban > img').click();
        cy.get("#closeLargeModal").click();

    })
})
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}