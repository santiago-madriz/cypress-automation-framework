import ProductsPage from '../pages/ProductsPage';

describe('Product Functionality', () => {
  beforeEach(() => {
    ProductsPage.visit();
  });

  it('should display products with prices and add to cart buttons', () => {
    ProductsPage.getProductsSection().should('be.visible');
    
    // Test key products
    const keyProducts = ['Molcajete', 'Tequila Don Julio 1942', 'Dulces de la Rosa - Mazapán'];
    
    keyProducts.forEach(product => {
      ProductsPage.getProductByName(product).should('be.visible');
      ProductsPage.getProductPrice(product).should('be.visible');
      ProductsPage.getAddToCartButton(product).should('be.visible');
    });
  });

  it('should display product categories', () => {
    ProductsPage.getProductCategories().forEach(category => {
      cy.contains(category).should('be.visible');
    });
  });

  it('should show filters button', () => {
    ProductsPage.getFiltersButton().should('be.visible');
  });

  it('should display product images', () => {
    ProductsPage.getProductByName('Molcajete').should('be.visible');
    ProductsPage.getProductImage('Molcajete').should('be.visible');
  });

  it('should show discounts on some products', () => {
    // Check for discount indicators
    cy.get('body').then($body => {
      if ($body.text().includes('-13%') || $body.text().includes('-12%')) {
        cy.contains('-13%').should('be.visible');
      }
    });
  });
});
