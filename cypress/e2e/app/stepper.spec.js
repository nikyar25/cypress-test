describe("Stepper page", ()=> {
  it('horizontal stepper should display correct title on each step', () => {
    cy.visit('pages/layout/stepper')

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
