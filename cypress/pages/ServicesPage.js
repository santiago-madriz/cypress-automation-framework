// cypress/pages/ServicesPage.js

class ServicesPage {
  visit() {
    cy.visit('/');
  }

  getServicesSection() {
    return cy.contains('Nuestros Servicios');
  }

  getServiceByName(serviceName) {
    return cy.contains(serviceName);
  }

  getServicesDescription() {
    return cy.contains('Ofrecemos una amplia gama de servicios para conectarte con México');
  }

  getAvailableServices() {
    return [
      'ALQUILER DE ARTÍCULOS PARA EVENTOS',
      'TRÁMITES DE PAGO EN MÉXICO',
      'ENCOMIENDA DE DOCUMENTOS',
      'PEDIDOS BAJO ENCARGO'
    ];
  }

  scrollToServices() {
    this.getServicesSection().scrollIntoView();
  }

  validateServiceDescription(serviceName, expectedDescription) {
    this.getServiceByName(serviceName).should('be.visible');
    cy.contains(expectedDescription).should('be.visible');
  }
}

export default new ServicesPage();
