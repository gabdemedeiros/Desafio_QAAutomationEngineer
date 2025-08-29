/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.4', () => {

    it('Validar progresso do Progress Bar', () => {

        // Ignora erros de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Widgets
        cy.contains("Widgets").click()

        //Clicar no submenu Progress Bar
        cy.contains("Progress Bar").click()

        //Clicar no botão Start
        cy.get("#startStopButton").click()

        //Parar antes dos 25%
        const pararEm25 = () => {
        cy.get('div[role="progressbar"]').invoke('attr', 'aria-valuenow').then(v => {
            const valor = parseInt(v)
            if (valor >= 24) {
            cy.get("#startStopButton").click() // Para a barra
            } else {
            cy.wait(10).then(pararEm25) // Espera 10ms e chama de novo
            // O cy.wait aqui permite que a interface atualize o aria-valuenow
            }
        })
        }
        pararEm25()

        //Validar que o valor da progress Bar é menor ou igual aos 25%
        cy.get('div[role="progressbar"]')
          .invoke('attr', 'aria-valuenow')
          .then(v => expect(parseInt(v)).to.be.lte(25))

        // Apertar Start novamente e ao chegar aos 100%, resetar a progress bar
        cy.wait(5000) //Espera 5 segundos
        cy.get("#startStopButton").click()
        
    });
    
});