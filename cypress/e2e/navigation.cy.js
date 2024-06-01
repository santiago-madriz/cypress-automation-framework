describe('Navigation', () => {
    beforeEach(() => {
      cy.visit('https://santiagomadriz.com');
    });
  
    const sections = [
      { id: '#expertise', text: 'Expertise' },
      { id: '#about', text: 'About Me' },
      { id: '#projects', text: 'Projects' },
      { id: '#certifications', text: 'Certifications' },
      { id: '#work', text: 'Work Experience' },
      { id: '#contact', text: 'Contact' },
    ];
  
    sections.forEach(section => {
      it(`should navigate to the ${section.text} section`, () => {
        cy.get(`[href="${section.id}"]`).click();
        cy.url().should('include', section.id);
        cy.get(section.id).should('be.visible');
      });
    });
  });