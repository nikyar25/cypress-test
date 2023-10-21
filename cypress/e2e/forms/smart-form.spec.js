describe("Stepper page", ()=> {
  it('should display valid users', () => {
    cy.visit('pages/tables/smart-table')

    cy.get('table tbody tr .ng-star-inserted')

    cy.get('nb-stepper[orientation="horizontal"] h3').should('have.text', "Step content #1")
    cy.get('nb-stepper[orientation="horizontal"] button').last().click()

    cy.get('nb-stepper[orientation="horizontal"] h3').should('have.text', "Step content #2")
    cy.get('nb-stepper[orientation="horizontal"] button').last().click()

    cy.get('nb-stepper[orientation="horizontal"] h3').should('have.text', "Step content #3")
    cy.get('nb-stepper[orientation="horizontal"] button').last().click()

    cy.get('nb-stepper[orientation="horizontal"] h3').should('have.text', "Step content #4")
    cy.get('nb-stepper[orientation="horizontal"] button').last().should('be.disabled')
  });
})
