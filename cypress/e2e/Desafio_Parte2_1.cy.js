/// <reference types="cypress" /> 

import { faker } from '@faker-js/faker'
import 'cypress-file-upload'

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.1', () => {

    //Variáveis
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email()
    const phone = faker.string.numeric(10)
    const fileName = "arquivo.txt"   // arquivo está na pasta cypress/fixtures
    it('Preenche e envia o formulário de sucesso', () => {

        // Ignora erros de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        
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
                                            
        cy.get("#dateOfBirthInput").click()//Data de aniversário
        cy.get(".react-datepicker__month-select").select("May") //Mês
        cy.get(".react-datepicker__year-select").select("1995") //Ano
        cy.get(".react-datepicker__day--020").click() //Dia

        cy.get("#subjectsInput").type("Math{enter}") //Matérias
        cy.get('label[for="hobbies-checkbox-3"]').click() //Hobbies
        
        //Upload de Arquivo
        cy.get("#uploadPicture").attachFile(fileName)

        //Submeter formulário

        //Garantir pop-up

        //Fechar pop-up


    });
});