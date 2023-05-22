Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.name==='AxiosError') {
    Cypress.log({
      name: err.name,
      message: err.message
    })
    // we expected this error, so let's ignore it
    // and let the test continue
    return false
  } else if (err.message.includes('not a function')) {
    Cypress.log({
      name: err.name,
      message: err.message
    })
    return false
  }
});

describe('Homescreen', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('displays 7 cards on the initial screen', () => {
    cy.get('.cy-entryPageNav .card-body').should('have.length', 7);
  })

  it('contains calendar-, mensa- and dualis-card', () => {
    cy.get('.cy-entryPageNav .cy-calendar').first().should('have.text', 'Kalender');
    cy.get('.cy-entryPageNav .cy-mensa').first().should('have.text', 'Mensa');
    cy.get('.cy-entryPageNav .cy-dualis').first().should('have.text', 'Dualis');
  })

  it('displays navbar component', () => {
    cy.get('.cy-navBarNav .card-body').should('have.length', 7);

    cy.get('.cy-navBarNav .cy-calendar').first().should('have.text', 'Kalender');
    cy.get('.cy-navBarNav .cy-mensa').first().should('have.text', 'Mensa');
    cy.get('.cy-navBarNav .cy-dualis').first().should('have.text', 'Dualis');
  })

  it('closes navbar component on close button', () => {
    cy.get('button.navbar-toggler').click()
    cy.get('.cy-navBarNav .btn-close').click();
    cy.get('.cy-navBarNav').should('not.be.visible');
  })

  it('closes navbar component on outer click', () => {
    cy.get('button.navbar-toggler').click();
    cy.get('.offcanvas-backdrop').click();
    cy.get('.cy-navBarNav').should('not.be.visible');
  })

  it('navigates to calendar from the navbar component', () => {
    cy.get('button.navbar-toggler').click()
    cy.get('.cy-navBarNav .cy-calendar').click();
    cy.get('.fc-view').should('contain','all-day');
  })

  it('navigates to mensa-component', () => {
    cy.get('.cy-entryPageNav .cy-mensa').click();
    cy.get('#dropdown-basic-button').contains('Mensa Erzbergerstraße');
  })

  it('navigates to dualis-component', () => {
    cy.get('.cy-entryPageNav .cy-dualis').click();
    cy.get('.container').contains('Dualis')
  })
 
})