require('cypress-xpath');

describe('Iframe handle', () => {
    it('Grab elements from iframe', () => {
        cy.visit("https://demoqa.com/frames")
        cy.frameLoaded('#frame1');
        cy.iframe('#frame1').contains('This is a sample page').should('be.visible')

    })
})
