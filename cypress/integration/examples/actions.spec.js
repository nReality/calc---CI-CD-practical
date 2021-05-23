/ <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    // cy.visit('https://agile-africa-fa653.web.app/calc.html');
    cy.visit('public/calc.html');
  })

  it('adding two numbers give the sum', () => {
    // given
    const firstNumber = '1';
    cy.get('#val1').click();
    cy.get('#val1').type(firstNumber);
    const secondNumber = '2';
    cy.get('#val2').click();
    cy.get('#val2').type(secondNumber);

    // when
    cy.get('#calc').click();

    //then
    const expectedResult = '3';
    cy.get('#answer')
      .should('have.value', expectedResult);
  })

})
