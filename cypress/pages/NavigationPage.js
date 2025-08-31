// cypress/pages/NavigationPage.js

class NavigationPage {
  visit() {
    cy.visit('/');
  }

  navigateToSection(sectionId) {
    cy.get(`[href="${sectionId}"]`).click();
    cy.url().should('include', sectionId);
    cy.get(sectionId).should('be.visible');
  }
}

export default new NavigationPage();
