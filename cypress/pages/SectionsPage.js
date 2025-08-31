// cypress/pages/SectionsPage.js

class SectionsPage {
  visit() {
    cy.visit('/');
  }

  goToSection(sectionId) {
    cy.get(`[href="${sectionId}"]`).click();
  }

  sectionContent(sectionText) {
    return cy.contains(sectionText);
  }
}

export default new SectionsPage();
