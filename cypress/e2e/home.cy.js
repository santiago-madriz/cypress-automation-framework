import HomePage from '../pages/HomePage';

describe('Home Page', () => {
  beforeEach(() => {
    HomePage.visit();
  });

  it('should load the home page and display the correct title', () => {
    cy.title().should('include', 'Galería Mexicana');
  });

  it('should display the header content', () => {
    HomePage.getHeader().should('be.visible');
  });

  it('should display the main sections', () => {
    HomePage.getProductGrid().should('be.visible');
    HomePage.getBrandSection().should('be.visible');
    HomePage.getServiceSection().should('be.visible');
    HomePage.getWhyChooseUsSection().should('be.visible');
    HomePage.getBlogSection().should('be.visible');
  });

  it('should display key products', () => {
    HomePage.getProductByName('Molcajete').should('be.visible');
    HomePage.getProductByName('Tequila Don Julio 1942').should('be.visible');
    HomePage.getProductByName('Dulces de la Rosa - Mazapán').should('be.visible');
  });

  it('should display footer with contact information', () => {
    HomePage.getFooter().should('be.visible');
    cy.contains('+506 8739-6001').should('be.visible');
    cy.contains('Cartago, Costa Rica').should('be.visible');
  });
});