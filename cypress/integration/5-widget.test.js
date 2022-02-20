require('cypress-xpath');

describe('Select option', () => {
    it.skip('Select a value from dropdown', () => {
        cy.visit('https://demoqa.com/select-menu')
        cy.get("#oldSelectMenu").select("2")

    })
    it('Select multiple values from dropown', () => {
        cy.visit('https://demoqa.com/select-menu')
        
        cy.get("#cars").select("volvo", "saab", "audi")
    })
})