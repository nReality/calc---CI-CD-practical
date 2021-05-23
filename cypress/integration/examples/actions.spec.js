/ <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    // cy.visit('https://example.cypress.io/commands/actions')
    cy.visit('public/calc.html');
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // cy.visit('https://agile-africa-fa653.web.app/calc.html');
    cy.get('input:nth-child(1)').click();
    cy.get('input:nth-child(1)').type('1');
    cy.get('input:nth-child(3)').click();
    cy.get('input:nth-child(3)').type('2');
    cy.get('input:nth-child(5)').click();
    cy.get('input:nth-child(4)').click();

    // cy.get('.action-disabled')
    //   // Ignore error checking prior to type
    //   // like whether the input is visible or disabled
    //   .type('disabled error checking', { force: true })
    //   .should('have.value', 'disabled error checking')
  })

})
