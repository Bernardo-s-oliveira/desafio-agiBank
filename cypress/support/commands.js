Cypress.Commands.add('pesquisar', (value,palavraChave) => {
  if (value === 'desktop') {
    cy.get('#search-open').click()
    cy.get('.desktop-search > .search-form > label > .search-field').type(palavraChave +'{Enter}')
  } else {
    cy.get('.mobile-search > .search-form > label > .search-field').type(' {Enter}')
  }
  cy.get('.archive-title:contains('+ palavraChave +')').should('be.visible')  
})