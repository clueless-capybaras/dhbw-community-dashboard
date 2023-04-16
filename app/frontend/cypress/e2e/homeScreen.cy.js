describe('homescreen works properly', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:3000/')
  })
  
  it('dashboard component works properly', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.cy-navBarNav .card-body').should('have.length', 7);
    cy.get('.cy-entryPageNav .card-body').should('have.length', 7);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.cy-calendar').first().should('have.text', 'Kalender');
    cy.get('.cy-mensa').first().should('have.text', 'Mensa');
    cy.get('.cy-dualis').first().should('have.text', 'Dualis');
  })

  it('navigates to calendar (via navbar)', () => {
    cy.get('button.navbar-toggler').click()
    cy.get('.cy-navBarNav .cy-calendar').click();
    cy.get('.fc-timeGridSixDay-view').contains('all-day');
  })

  it('navigates to mensa-component', () => {
    cy.get('.cy-entryPageNav .cy-mensa').click();
    cy.get('#dropdown-basic-button').contains('Mensa Erzbergerstraße')
  })

  it('navigates to dualis-component', () => {
    cy.get('.cy-entryPageNav .cy-dualis').click();
    cy.get('.App').contains('Dualis')
  })
})