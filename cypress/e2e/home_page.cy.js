describe('The Home Page', () => {
  it('renders the heading and loads an image', () => {
    if (Cypress.browser.family === 'chromium') {
      Cypress.automation('remote:debugger:protocol', {
        command: 'Network.setCacheDisabled',
        params: { cacheDisabled: true },
      });
    }

    cy.intercept(/.jpg/).as('imageRequest');
    cy.visit('/');

    cy.wait('@imageRequest').its('response.statusCode').should('eq', 200);
  });

  it('goes to albums', () => {
    cy.findByRole('link', { name: 'arrow bottom' }).click();
    cy.url().should('include', '/albums');
  });
});
