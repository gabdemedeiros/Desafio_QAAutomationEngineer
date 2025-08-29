/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.3', () => {

    it('Teste de tabela', () => {

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Elements
        cy.contains("Elements").click()

        //Clicar no submenu Web Tables
        cy.contains("Web Tables").click()

        //Criar um novo registro
        cy.get("#addNewRecordButton").click()

        //Editar o novo registro criado

        //Deletar o novo registro criado.


        
    });
    
});