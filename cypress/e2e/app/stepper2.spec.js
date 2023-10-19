describe("Stepper page", ()=> {
  it('modal-overlays stepper', () => {
    cy.visit('pages/modal-overlays/dialog')
    cy.get('nb-card-body.result-from-dialog button').last().click()
    cy.get('nb-card _ngcontent-ika-c28').should('be.visible');
    cy.get('nb-card-header _ngcontent-ika-c28').should('be.visible').should('have.text', 'Enter your name');
    cy.get('input.size-medium shape-rectangle').should('be.visible');
    cy.get('nb-card-footer[button.cancel.appearance-filled.size-medium.status-danger.]').should('be.visible');
    cy.get('nb-card-footer[button.cancel.appearance-filled.size-medium.status-success.]').should('be.visible');
  });
})
