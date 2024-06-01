Cypress.Commands.add('navigateToSection', (sectionId, sectionText) => {
    cy.get(`[href="${sectionId}"]`).click();
    cy.url().should('include', sectionId);
    cy.contains(sectionText).should('be.visible');
  });