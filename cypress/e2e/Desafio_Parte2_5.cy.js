/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.4', () => {

    it('Colocar elementos em ordem crescentes', () => {

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Interactions
        cy.contains("Interactions").click()

        //Clicar no submenu Sortable
        cy.contains("Sortable").click()

        // Reordenar a lista em ordem crescente

        
        
    });
    
});