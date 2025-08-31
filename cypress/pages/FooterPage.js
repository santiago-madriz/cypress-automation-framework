// cypress/pages/FooterPage.js

class FooterPage {
  visit() {
    cy.visit('/');
  }

  getFooter() {
    return cy.get('footer');
  }

  getCompanyName() {
    return cy.contains('Galería Mexicana');
  }

  getCompanyDescription() {
    return cy.contains('Llevamos México a tus manos con productos auténticos y de la mejor calidad');
  }

  getContactInfo() {
    return {
      phone: cy.contains('+506 8739-6001'),
      location: cy.contains('Cartago, Costa Rica'),
      email: cy.contains('espacioscreativos@hotmail.it')
    };
  }

  getQuickLinks() {
    return [
      'Inicio',
      'Productos',
      'Servicios',
      'Ubicación',
      'Contáctanos'
    ];
  }

  getShippingInfo() {
    return [
      'Correos de Costa Rica',
      'Entregas personales',
      'Pago con el 50%'
    ];
  }

  getSocialLinks() {
    return {
      facebook: cy.get('a[href*="facebook"]'),
      instagram: cy.get('a[href*="instagram"]'),
      whatsapp: cy.get('a[href*="whatsapp"]')
    };
  }

  getPaymentMethods() {
    return cy.contains('SINPE');
  }

  getCopyright() {
    return cy.contains('© 2025 Galería Mexicana. Todos los derechos reservados.');
  }

  scrollToFooter() {
    this.getFooter().scrollIntoView();
  }
}

export default new FooterPage();
