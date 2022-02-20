require('cypress-xpath');
require('cypress-downloadfile/lib/downloadFileCommand')

describe('Element coverage', () => {
    it('Click segment', () => {
        cy.visit('https://demoqa.com/')
        cy.title().should('eq', 'ToolsQA')
        cy.get(".card-body").eq(0).click();

    })
    it('Click textbox menu', () => {
        cy.get("#item-0").click();
        cy.get("#userName").type("Test User");
        cy.get("#userEmail").type("test@grr.la");
        cy.get('#submit').click();
        cy.get("#name").contains('Test')

    })
    it('Click checkbox menu', () => {
        cy.get("#item-1").click();
        cy.get(".rct-checkbox").click();
        cy.get("span").contains("home")

    })
    it('Check radio button', () => {
        cy.get("#item-2").click();
        cy.xpath("//label[contains(text(),'Yes')]").click();
        cy.get(".mt-3").contains("Yes");
        cy.xpath("//label[contains(text(),'Impressive')]").click();
        cy.get(".mt-3").contains("Impressive");
    
    })
    it('Button double click', () => {
        cy.get("#item-4").click();
        cy.get("#doubleClickBtn").dblclick();
        cy.contains("You have done a double click");
    
    })
    it('Button right click', () => {
        cy.get("#rightClickBtn").rightclick();
        cy.contains("You have done a right click");
    
    })
    it('Button click', () => {
        cy.get("button").eq(3).click();
        cy.contains("You have done a dynamic click");
    
    })
    it('Upload file', () => {
        cy.get("#item-7").click();
        const filepath = 'files/salman.png'
        cy.get('#uploadFile').attachFile(filepath)
    
    })
    it('Download file', () => {
        cy.get("#downloadButton").click();
    
    })
    

})