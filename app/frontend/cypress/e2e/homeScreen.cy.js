describe('empty spec', () => {
  it('isReachable', () => {
    cy.visit('http://localhost:3000/')
  })
  it('hasFeatureEntryPoints', () => {
    cy.get('div.card');
    cy.get('div.card').each(($card, index, $lcards) => {
        $card.click();
    })
  })
})