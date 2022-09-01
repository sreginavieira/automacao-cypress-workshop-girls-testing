describe('Testando API via CEP', () => {
    it('Buscando um CEP válido', () => {
      const url = "https://viacep.com.br/ws/01001000/json/"
      cy.request ("https://viacep.com.br/ws/01001000/json/").as ('response')
      cy.get('@response').should((response)=>{
        expect(response.status).to.equal(200)
        expect(response.body).to.have.property('cep')
      })
    })
  })


  
  