/// <reference types="cypress" />

import { faker } from '@faker-js/faker'

context('DESAFIO QA AUTOMATION ENGINEER - PARTE 2.3', () => {

    //Variáveis do formulário
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const email = faker.internet.email()
    const age = faker.string.numeric(2)
    const salary = faker.string.numeric(5)
    const department = "Tecnologia"

    it('Teste de tabela', () => {

        // Ignora erros de scripts externos
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

        //Acessar o site principal
        cy.visit("https://demoqa.com/")

        // Escolher a opção Elements
        cy.contains("Elements").click()

        //Clicar no submenu Web Tables
        cy.contains("Web Tables").click()

        //Criar um novo registro
        cy.get("#addNewRecordButton").click()

        //Preencher formulário
        cy.get("#firstName").type(firstName) //Primeiro nome
        cy.get("#lastName").type(lastName) //Sobrenome
        cy.get("#userEmail").type(email) //E-mail
        cy.get("#age").type(age) //Idade
        cy.get("#salary").type(salary) //Salário
        cy.get("#department").type("Automação") //Departamento

        //Enviar formulário

        cy.get("#submit").click()


        //Editar o novo registro criado

        //Deletar o novo registro criado.


        
    });
    
});