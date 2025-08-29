/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.4', () => {

    it('Validar progresso do Progress Bar', () => {

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Widgets
        cy.contains("Widgets").click()

        //Clicar no submenu Progress Bar
        cy.contains("Progress Bar").click()

        //Clicar no botão Start
        cy.get("#startStopButton").click()

        //Parar antes dos 25%

        //Validar que o valor da progress Bar é menor ou igual aos 25%

        // Apertar Start novamente e ao chegar aos 100%, resetar a progress bar
        
    });
    
});