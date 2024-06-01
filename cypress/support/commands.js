import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

Cypress.Commands.add('navigateToSection', (sectionId, sectionText) => {
    cy.get(`[href="${sectionId}"]`).click();
    cy.url().should('include', sectionId);
    cy.contains(sectionText).should('be.visible');
  });



