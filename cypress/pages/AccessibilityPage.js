// cypress/pages/AccessibilityPage.js

class AccessibilityPage {
  visit() {
    cy.visit('/');
  }

  injectAxe() {
    cy.injectAxe();
  }

  checkA11y(context = null, options = null, callback) {
    cy.checkA11y(context, options, callback);
  }

  goToSection(sectionId) {
    cy.get(`[href="${sectionId}"]`).click();
  }
}

export default new AccessibilityPage();
