// cypress/pages/HomePage.js

class HomePage {
  visit() {
    cy.visit('/');
  }

  getHeader() {
    return cy.contains('De México a tus manos');
  }

  getProductGrid() {
    return cy.contains('Nuestros Productos Mexicanos');
  }

  getProductByName(name) {
    return cy.contains('h3, h4, h5, h6', name);
  }

  getBrandSection() {
    return cy.contains('Nuestras Marcas');
  }

  getServiceSection() {
    return cy.contains('Nuestros Servicios');
  }

  getWhyChooseUsSection() {
    return cy.contains('¿Por qué elegirnos?');
  }

  getBlogSection() {
    return cy.contains('Nuestro Blog');
  }

  getFooter() {
    return cy.get('footer');
  }
}

export default new HomePage();
