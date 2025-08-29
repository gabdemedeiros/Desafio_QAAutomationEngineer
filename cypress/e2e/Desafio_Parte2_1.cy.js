/// <reference types="cypress" /> 

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.1', () => {
    it('Preenche e envia o formulário de sucesso', () => {
        
        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        //Escolher a opção Forms
        cy.contains("Forms").click()

        //Clicar em Practice Form
        cy.contains("Practice Form").click()

        //Preencher formulário

        //Upload de Arquivo

        //Submeter formulário

        //Garantir pop-up

        //Fechar pop-up


    });
});