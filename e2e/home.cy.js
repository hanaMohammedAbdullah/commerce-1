describe('displays all 3 products on the home page', () => {
  it('passes', () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="product-tag"]').eq(0).within(() => {
      cy.get('[data-test="product-name"]').should('contain', 'T-Shirt')
      cy.get('[data-test="product-price"]').should('contain', '25.00 USD')  
    })
    cy.get('[data-test="product-tag"]').eq(1).within(() => {
      cy.get('[data-test="product-name"]').should('contain', 'Lightweight Jacket')
      cy.get('[data-test="product-price"]').should('contain', '249.99 USD')  
    })
    cy.get('[data-test="product-tag"]').eq(2).within(() => {
      cy.get('[data-test="product-name"]').should('contain', 'Shirt')
      cy.get('[data-test="product-price"]').should('contain', '25.00 USD')  
    })
  })
})