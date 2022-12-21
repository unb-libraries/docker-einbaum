describe("Google Search", () => {
  it('should find 1,000,000+ results for "Marcellus Wallace', () => {
    cy.visit('/')
    cy.get('input[title="Search"]')
      .type('Marcellus Wallace{enter}')
    cy.contains(/[1-9](,[0-9]{3}){2,} results/)
  })
})