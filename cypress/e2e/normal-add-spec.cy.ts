/// <reference types="cypress" />
describe('a normal addition operation', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
    cy.get('#first-input').type('{backspace}10');
    cy.get('input').eq(1).click();
    cy.get('#second-input').type('{backspace}6');
    cy.get('#result-text').contains('16');
  });
});
