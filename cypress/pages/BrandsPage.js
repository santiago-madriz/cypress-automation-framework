// cypress/pages/BrandsPage.js

class BrandsPage {
  visit() {
    cy.visit('/');
  }

  getBrandsSection() {
    return cy.contains('Nuestras Marcas');
  }

  getBrandByName(brandName) {
    return cy.get(`img[alt*="${brandName}"]`);
  }

  getBrandDescription() {
    return cy.contains('Trabajamos con las mejores marcas mexicanas para traerte productos auténticos');
  }

  getAvailableBrands() {
    return [
      'Dulces de la Rosa',
      'Tecate',
      'Gran Malo',
      'Don Julio',
      'Modelo',
      'Costena',
      'Pulparindo',
      'Takis'
    ];
  }

  scrollToBrands() {
    this.getBrandsSection().scrollIntoView();
  }
}

export default new BrandsPage();
