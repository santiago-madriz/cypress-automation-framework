describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('https://santiagomadriz.com');
  });

  it('should load the home page and display the correct title', () => {
    cy.title().should('eq', 'Santiago Madríz - QA Automation Engineer');
  });

  it('should display the header content', () => {
    cy.contains('SANTIAGO MADRIZ');
    cy.contains('SOFTWARE QA AUTOMATION ENGINEER & RPA DEVELOPER');
  });

  it('should navigate to the Work Experience section when clicking the work link', () => {
    cy.get('[href="#work"]').click();
    cy.url().should('include', '#work');
    cy.contains('QA Engineer - Konrad Group');
  });
});