// cypress/e2e/sample_spec.cy.js
describe('My Personal Site', () => {
  it('should load the home page', () => {
    cy.visit('https://santiagomadriz.com');
    cy.contains('Santiago Madriz');
    cy.get('[href="#work"]').click();
    cy.url().should('include', '#work');
    cy.contains('Konrad');
  });
});