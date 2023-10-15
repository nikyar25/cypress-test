describe("Stepper page", ()=> {
  it('should find text on this page' ,() =>{
 cy.visit('pages/layout/stepper')
    cy.get("h3").first().should("have.text", "Step content #1")
  });
  it('should find text on this page' ,() =>{
    cy.visit('pages/layout/stepper')
    cy.get("h3").last().should("have.text", "Step content #1")
})
})
