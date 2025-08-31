import './commands';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  return false;
});

// Custom command for navigating to sections in Galería Mexicana
Cypress.Commands.add('scrollToSection', (sectionText) => {
  cy.contains(sectionText).scrollIntoView();
  cy.contains(sectionText).should('be.visible');
});

// Custom command for checking product visibility
Cypress.Commands.add('verifyProductDetails', (productName) => {
  cy.contains(productName).should('be.visible');
  cy.contains(productName).parent().parent().within(() => {
    cy.contains('₡').should('be.visible'); // Price
    cy.contains('Agregar al carrito').should('be.visible'); // Add to cart button
  });
});

// Custom command for checking brand visibility
Cypress.Commands.add('verifyBrandExists', (brandName) => {
  cy.get(`img[alt*="${brandName}"]`).should('exist');
});

// Custom command for footer validation
Cypress.Commands.add('validateFooterInfo', () => {
  cy.get('footer').within(() => {
    cy.contains('Galería Mexicana').should('be.visible');
    cy.contains('+506 8739-6001').should('be.visible');
    cy.contains('Cartago, Costa Rica').should('be.visible');
  });
});

// Custom command for waiting for page load
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.contains('De México a tus manos').should('be.visible');
});



