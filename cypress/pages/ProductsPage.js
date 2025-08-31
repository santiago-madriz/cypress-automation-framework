// cypress/pages/ProductsPage.js

class ProductsPage {
  visit() {
    cy.visit('/');
  }

  getProductByName(productName) {
    return cy.contains('h3, h4, h5, h6', productName);
  }

  getAddToCartButton(productName) {
    return this.getProductByName(productName).parent().parent().contains('Agregar al carrito');
  }

  getProductPrice(productName) {
    return this.getProductByName(productName).parent().parent().contains('₡');
  }

  getProductImage(productName) {
    return this.getProductByName(productName).parent().parent().find('img');
  }

  clickAddToCart(productName) {
    this.getAddToCartButton(productName).click();
  }

  getProductsSection() {
    return cy.contains('Nuestros Productos Mexicanos');
  }

  getFiltersButton() {
    return cy.contains('Filtros');
  }

  getProductCategories() {
    return [
      'Productos Gourmet',
      'Bebidas Alcohólicas',
      'Dulces y Confitería'
    ];
  }
}

export default new ProductsPage();
