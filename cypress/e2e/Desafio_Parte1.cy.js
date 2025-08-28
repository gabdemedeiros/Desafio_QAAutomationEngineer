/// <reference types="cypress" />

context('DESAFIO QA AUTOMATION ENGONEER - PARTE 1', () => {

    let idUsuario
    let token

    const nomeDeUsuario = "Gab" + Math.floor(Math.random() * 10000)
    const senha = "Password123!"

    //Criar um usuário
    it('Criar usuário', () => {

        cy.request({
            method: "POST",
            url:"https://demoqa.com/Account/v1/User",
            body: {
                "userName": nomeDeUsuario,
                "password": senha
            }
        }).then((res) => {
            expect(res.status).to.eq(201)
            idUsuario = res.body.idUsuario

            cy.log("ID de usuário: " + idUsuario)

        })
    });

    //Gerar um token de acesso
    it('Gerar token', () => {

        cy.request({
            method: "POST",
            url:"https://demoqa.com/Account/v1/GenerateToken",
            body: {
                "userName": nomeDeUsuario,
                "password": senha
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            token = res.body.token

            cy.log("Token gerado: " + token)

        })
    });
    //Confirmar se o usuário criado está autorizado
    it('Checar autorização', () => {
        cy.request({
            method: "POST",
            url: "https://demoqa.com/Account/v1/Authorized",
            body: {
                "userName": nomeDeUsuario,
                "password": senha
            }
        }).then((res) =>{
            expect(res.status).to.eq(200)
            expect(res.body).to.eq(true)
        })
    });

    //Listar os livros disponíveis

    //Alugar dois livros de livre escolha

    //Listar os detalhes do usuário com os livros escolhidos
    
});