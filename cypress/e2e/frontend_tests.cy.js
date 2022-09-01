describe('Testes de Frontend', () => {
    it('Acessar página com sucesso', () => {
        cy.visit("https://angularjs.realworld.io/#/")
        cy.get('.container > p').should('be.visible')
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').should('be.visible')
        cy.get('[show-authed="false"] > :nth-child(3) > .nav-link').should('be.visible')
      })
    })