/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.2', () => {

    it('', () => {

        // Ignora erros de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Alerts, Frame & Windows
        cy.contains("Alerts, Frame & Windows").click()

        //Clicar no submenu Browser Windows
        cy.contains("Browser Windows").click()

        // Sobrescreve o window.open para abrir na mesma aba
        cy.window().then(win => {
            cy.stub(win, 'open').callsFake(url => {
                win.location.href = url
            })
        })

        //Clicar no botão New Window
        cy.get("#windowButton").click()

        // Validar a mensagem
        cy.contains("This is a sample page").should('be.visible')

        //Voltar para a aba anterior
        cy.wait(5000) //Espera 5 segundos
        cy.go('back')
        
    });
    
});