import 'cypress-axe';

describe('Accessibility Tests', () => {
    beforeEach(() => {
      cy.visit('https://santiagomadriz.com');
      cy.injectAxe();
    });
  
    it('should check a11y violations on the home page', () => {
      cy.checkA11y();
    });
  
    it('should check a11y violations on each section', () => {
      const sections = ['#expertise', '#about', '#projects', '#certifications', '#work', '#contact'];
      sections.forEach(section => {
        cy.get(`[href="${section}"]`).click();
        cy.injectAxe();
        cy.checkA11y(section);
      });
    });
  });