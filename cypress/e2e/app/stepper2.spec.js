describe("Stepper page", ()=> {
  it('modal-overlays stepper', () => {
    cy.visit('pages/modal-overlays/dialog')
    cy.get('nb-card-body.result-from-dialog button').last().click()
    cy.get('nb-dialog-container').should('be.visible');
    cy.get('nb-dialog-container nb-card-header').should('be.visible').should('have.text', 'Enter your name');
    cy.get('nb-dialog-container input').should('be.visible');
    cy.get('nb-card-footer button.cancel').should('be.visible');
    cy.get('nb-card-footer button.status-success').should('be.visible');
  });
})
