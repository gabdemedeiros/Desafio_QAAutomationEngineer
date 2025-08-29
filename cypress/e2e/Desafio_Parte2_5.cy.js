/// <reference types="cypress" />

import '@4tw/cypress-drag-drop'

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.5', () => {

    it('Colocar elementos em ordem crescentes', () => {

        // Ignora erros de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Interactions
        cy.contains("Interactions").click()

        //Clicar no submenu Sortable
        cy.contains("Sortable").click()

        
        // Ativar a aba List quando ela estiver visivel
        cy.get("#demo-tab-list").click()
        cy.get("#demo-tabpane-list").should("be.visible")

        cy.get('#demo-tabpane-list').scrollIntoView()
        cy.scrollTo('center')
        cy.wait(5000)

        // Reordenar a lista em ordem crescente
        
        // O One vai para depois do Six
        cy.contains(".list-group-item", "One")
            .drag(".list-group-item:contains('Six')", { force: true })

        // O Two vai para depois do One
        cy.contains(".list-group-item", "Two")
            .drag(".list-group-item:contains('One')", { force: true })

        // O Three vai para depois do Two
        cy.contains(".list-group-item", "Three")
            .drag(".list-group-item:contains('Two')", { force: true })

        // O Four vai para depois do Three
        cy.contains(".list-group-item", "Four")
            .drag(".list-group-item:contains('Three')", { force: true })

        // O Five vai para depois do Four
        cy.contains(".list-group-item", "Five")
            .drag(".list-group-item:contains('Four')", { force: true })

        // O Six vai para depois do Five
        cy.contains(".list-group-item", "Six")
            .drag(".list-group-item:contains('Five')", { force: true })

        cy.get('#demo-tabpane-list').scrollIntoView()

    })
  
});