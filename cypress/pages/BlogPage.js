// cypress/pages/BlogPage.js

class BlogPage {
  visit() {
    cy.visit('/');
  }

  getBlogSection() {
    return cy.contains('Nuestro Blog');
  }

  getBlogDescription() {
    return cy.contains('Descubre historias, tradiciones y guías sobre los mejores productos mexicanos');
  }

  getViewAllArticlesButton() {
    return cy.contains('Ver todos los artículos');
  }

  getBlogArticleByTitle(title) {
    return cy.contains(title);
  }

  getAvailableArticles() {
    return [
      'Top 10 Tequilas Premium en Costa Rica',
      'Diferencias entre Tequila y Mezcal',
      'Dulces Mexicanos Tradicionales'
    ];
  }

  clickViewAllArticles() {
    this.getViewAllArticlesButton().click();
  }

  scrollToBlog() {
    this.getBlogSection().scrollIntoView();
  }

  validateBlogPrompt() {
    return cy.contains('¿Quieres saber más sobre productos mexicanos?');
  }
}

export default new BlogPage();
