import ProductsPage from '../pages/ProductsPage';
import BrandsPage from '../pages/BrandsPage';
import ServicesPage from '../pages/ServicesPage';
import BlogPage from '../pages/BlogPage';
import FooterPage from '../pages/FooterPage';

describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should navigate to and display Products section', () => {
    ProductsPage.getProductsSection().should('be.visible');
    ProductsPage.getProductsSection().scrollIntoView();
    ProductsPage.getProductByName('Molcajete').should('be.visible');
  });

  it('should navigate to and display Brands section', () => {
    BrandsPage.scrollToBrands();
    BrandsPage.getBrandsSection().should('be.visible');
    BrandsPage.getBrandDescription().should('be.visible');
  });

  it('should navigate to and display Services section', () => {
    ServicesPage.scrollToServices();
    ServicesPage.getServicesSection().should('be.visible');
    ServicesPage.getServicesDescription().should('be.visible');
  });

  it('should navigate to and display Blog section', () => {
    BlogPage.scrollToBlog();
    BlogPage.getBlogSection().should('be.visible');
    BlogPage.getBlogDescription().should('be.visible');
  });

  it('should navigate to and display Footer section', () => {
    FooterPage.scrollToFooter();
    FooterPage.getFooter().should('be.visible');
    FooterPage.getCompanyName().should('be.visible');
  });
});