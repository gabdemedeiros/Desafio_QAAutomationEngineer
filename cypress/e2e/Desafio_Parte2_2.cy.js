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

        //Clicar no botão New Window
        cy.get("#windowButton").click()
        
    });
    
});