import ProductsPage from '../pages/ProductsPage';
import BrandsPage from '../pages/BrandsPage';
import ServicesPage from '../pages/ServicesPage';
import BlogPage from '../pages/BlogPage';
import FooterPage from '../pages/FooterPage';

describe('Section Content', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the Products section content', () => {
    ProductsPage.getProductsSection().should('be.visible');
    ProductsPage.getProductByName('Molcajete').should('be.visible');
    ProductsPage.getProductByName('Tequila Don Julio 1942').should('be.visible');
    ProductsPage.getProductByName('Dulces de la Rosa - Mazapán').should('be.visible');
  });

  it('should display product categories and prices', () => {
    ProductsPage.getProductCategories().forEach(category => {
      cy.contains(category).should('be.visible');
    });
    cy.contains('₡').should('be.visible');
  });

  it('should display the Brands section content', () => {
    BrandsPage.scrollToBrands();
    BrandsPage.getBrandsSection().should('be.visible');
    BrandsPage.getAvailableBrands().forEach(brand => {
      if (brand === 'Don Julio' || brand === 'Gran Malo' || brand === 'Tecate') {
        BrandsPage.getBrandByName(brand).should('exist');
      }
    });
  });

  it('should display the Services section content', () => {
    ServicesPage.scrollToServices();
    ServicesPage.getServicesSection().should('be.visible');
    ServicesPage.getAvailableServices().forEach(service => {
      ServicesPage.getServiceByName(service).should('be.visible');
    });
  });

  it('should display the Blog section content', () => {
    BlogPage.scrollToBlog();
    BlogPage.getBlogSection().should('be.visible');
    BlogPage.validateBlogPrompt().should('be.visible');
    BlogPage.getAvailableArticles().forEach(article => {
      BlogPage.getBlogArticleByTitle(article).should('be.visible');
    });
  });

  it('should display the Footer section content', () => {
    FooterPage.scrollToFooter();
    FooterPage.getContactInfo().phone.should('be.visible');
    FooterPage.getContactInfo().location.should('be.visible');
    FooterPage.getCompanyDescription().should('be.visible');
    FooterPage.getCopyright().should('be.visible');
  });
});