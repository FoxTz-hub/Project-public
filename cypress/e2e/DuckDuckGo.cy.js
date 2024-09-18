describe('Acessando o DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com')
  })

  it('Realizando a pesquisa de um item', () => {
    cy.get('#searchbox_input') // Seletor correto para o campo de busca
      .type('Avião militar{Enter}')
      .get(':nth-child(2) > .kFFXe30DOpq5j1hbWU1q').click()
  })
})
