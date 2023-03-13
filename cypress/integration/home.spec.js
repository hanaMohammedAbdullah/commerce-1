describe('Home page',() =>  {
  it('display all 3 product on the home page', () =>{
    cy.visit("http://localhost:3000")
    cy.get('[data-test="product-tag"]').eq(0).within(() => {
    cy.get('[data-test="product-name"]').should('contain',"Star Wars")
    cy.get('[data-test="product-price"]').should('conain',"$25.00 USD")
    })
  })
} )
