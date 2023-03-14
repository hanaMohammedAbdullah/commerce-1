describe('Header', () => {
  it('should have a header', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="logo"]').click()
    cy.location("pathname").should("eq", "/")
  })
})