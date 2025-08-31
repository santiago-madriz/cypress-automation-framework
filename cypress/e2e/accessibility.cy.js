import 'cypress-axe';

describe('Accessibility Tests', () => {
  beforeEach(() => {
    cy.visit('/');
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

  it('should check a11y violations on the products section', () => {
    cy.contains('Nuestros Productos Mexicanos').scrollIntoView();
    cy.injectAxe();
    cy.checkA11y('[data-testid="products-section"], .products, section:has(h2:contains("Nuestros Productos Mexicanos"))', null, (violations) => {
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

  it('should check a11y violations on the footer', () => {
    cy.get('footer').scrollIntoView();
    cy.injectAxe();
    cy.checkA11y('footer', null, (violations) => {
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