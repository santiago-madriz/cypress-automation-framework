import 'cypress-axe';

// cypress/e2e/accessibility_spec.cy.js
describe('Accessibility Tests', () => {
    beforeEach(() => {
      cy.visit('https://santiagomadriz.com');
      cy.injectAxe();
    });
  
    it('should check a11y violations on the home page', () => {
      cy.checkA11y(null, null, (violations) => {
        violations.forEach((violation) => {
          const nodes = Cypress.$(violation.nodes.map((node) => node.target).join(','));
          Cypress.log({
            name: 'a11y error!',
            consoleProps: () => violation,
            $el: nodes,
            message: `[${violation.help}](${violation.helpUrl})`
          });
        });
      });
    });
  
    it('should check a11y violations on each section', () => {
      const sections = ['#expertise', '#about', '#projects', '#certifications', '#work', '#contact'];
      sections.forEach((section) => {
        cy.get(`[href="${section}"]`).click();
        cy.injectAxe();
        cy.checkA11y(section, null, (violations) => {
          violations.forEach((violation) => {
            const nodes = Cypress.$(violation.nodes.map((node) => node.target).join(','));
            Cypress.log({
              name: 'a11y error!',
              consoleProps: () => violation,
              $el: nodes,
              message: `[${violation.help}](${violation.helpUrl})`
            });
          });
        });
      });
    });
  });