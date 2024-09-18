describe('Acessando o DuckDuckGo', () => {
  beforeEach(() => {
    cy.visit('https://duckduckgo.com').log('Acessado a pagina de pesquisa')
  })

  it('Realizando a pesquisa de uma imagem e feito seu download', () => {
    cy.get('#searchbox_input') // Seletor correto para o campo de busca
      .type('Avião militar{Enter}')
      .get(':nth-child(2) > .kFFXe30DOpq5j1hbWU1q').click().log('Acessado a aba de imagens do DuckDuckGo');


      cy.wait(2000);
      cy.get('.tile--img__media > .tile--img__media__i > .tile--img__img').first().then((imageUrl) => {
        // Fazendo a requisição para baixar a imagem
        cy.request({
        url : 'external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I4AepwXNWyRIlBGOhgSncgHaE8%26pid%3DApi&f=1&ipt=f05fbbcc12ca480995b803b400fc55d9d83f2f635110233e1c826e17ee0b1a3d&ipo=images',
          encoding: 'binary'
        }).then((response) => {
          // Salvando a imagem no sistema de arquivos
          const filePath = 'cypress/downloads/image.jpg'; // Caminho onde você deseja salvar a imagem
  
          // Usar o Node.js para escrever o arquivo
          cy.writeFile(filePath, response.body, 'binary').log('Sucesso ao fazer download da imagem')
    })
  })
  })
})
