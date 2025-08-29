/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.1', () => {

    //Variáveis
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email()
    const phone = faker.string.numeric(10)
    it('Preenche e envia o formulário de sucesso', () => {
        
        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        //Escolher a opção Forms
        cy.contains("Forms").click()

        //Clicar em Practice Form
        cy.contains("Practice Form").click()

        //Preencher formulário
        cy.get("#firstName").type(firstName) //Primeiro nome
        cy.get("#lastName").type(lastName) //Sobrenome
        cy.get("#userEmail").type(email) //E-mail
        cy.get('label[for="gender-radio-2"]').click() //Gênero
        cy.get("#userNumber").type(phone) //Telefone

        //Upload de Arquivo

        //Submeter formulário

        //Garantir pop-up

        //Fechar pop-up


    });
});