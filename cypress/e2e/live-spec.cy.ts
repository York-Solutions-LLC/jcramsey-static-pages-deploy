/// <reference types="cypress" />
describe('site live spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200');
  });
});
