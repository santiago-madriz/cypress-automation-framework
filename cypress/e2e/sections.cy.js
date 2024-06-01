// cypress/e2e/sections_spec.cy.js
describe('Section Content', () => {
    beforeEach(() => {
      cy.visit('https://santiagomadriz.com');
    });
  
    it('should display the Expertise section content', () => {
      cy.get('[href="#expertise"]').click();
      cy.contains('Automation Testing');
      cy.contains('Manual Testing');
      cy.contains('RPA Development');
    });
  
    it('should display the About Me section content', () => {
      cy.get('[href="#about"]').click();
      cy.contains('About Me');
      cy.contains('Software Engineer');
      cy.contains('QA Engineer');
    });
  
    it('should display the Projects section content', () => {
      cy.get('[href="#projects"]').click();
      cy.contains('TEC AI');
      cy.contains('Galería Mexicana');
      cy.contains('Automation Framework');
    });
  
    it('should display the Certifications section content', () => {
      cy.get('[href="#certifications"]').click();
      cy.contains('ISTQB Foundation Level - ASTQB');
      cy.contains('Automation Infrastructure Fundamentals - UiPath');
      cy.contains('RPA Developer - UiPath');
      cy.contains('Support Engineer - UiPath');
    });
  
    it('should display the Work Experience section content', () => {
      cy.get('[href="#work"]').click();
      cy.contains('QA Engineer - Konrad Group');
      cy.contains('RPA Developer - Lanshore');
      cy.contains('Support Engineer 3 - Tek Experts');
    });
  
    it('should display the Contact section content', () => {
      cy.get('[href="#contact"]').click();
      cy.contains('Email:');
      cy.contains('LinkedIn:');
      cy.contains('GitHub:');
    });
  });