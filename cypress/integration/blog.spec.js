describe('Cenário onde o artigo é pesquisado', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  context('Validação no desktop', () => {
    it('Pesquisar palavra chave no artigo do blog', () => {
      const frame = 'desktop'
      const palavraChave = "banco"
      cy.viewport(1280, 720)
      cy.pesquisar(frame, palavraChave)
    })
  })
  context('Validação no mobile', () => {
    it('Pesquisa em branco no artigo do blog', () => {
      const frame = 'mobile'
      const palavraChave = ""
      cy.get('#overlay-open').click()
      cy.pesquisar(frame, palavraChave)
    })
  })
})