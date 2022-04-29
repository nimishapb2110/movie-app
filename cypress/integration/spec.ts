describe('Movie search application', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the landing page', () => {
    cy.url().should('include', '/search');
    cy.contains('Movie Hunt');
    cy.contains('Featured');
  });

  it('Lists the list of movies for the search query entered', () => {
    cy.get('.search-bar__input').type('test');
    cy.get('button').click();
  });

  it('Opens searched movie detail dialog on click of card', () => {
    cy.get('.search-bar__input').type('test');
    cy.get('button').click();
    cy.get('app-movie-card').first().click();
    cy.get('mat-dialog-container').contains('Ok');
  });

  it('Visits the featured page', () => {
    cy.get('.header__menu li').last().click();
    cy.url().should('include', '/featured');
  });

  it('Opens featured movie detail dialog on click of card', () => {
    cy.get('.header__menu li').last().click();
    cy.url().should('include', '/featured');
    cy.get('app-movie-card').first().click();
    cy.get('mat-dialog-container').contains('Ok');
  });
});
