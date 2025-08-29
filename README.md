# DESAFIO - QA AUTOMATION ENGINEER
Candidata: Gabriele Monteiro de Medeiros

## Resumo: 
O Desafio de QA Automation da Accenture, está dividido em duas partes. A primeira delas, consiste em um desafio técnico com foco em API, e a segunda, com o foco em automação de elementos visuais.

### Tecnologias utilizadas:
Para o projeto foi utilizado o JavaScript com uso do Cypress na versão 14.5.4. A escolha por essas ferramentas foi dada disponibilidade de configuração prévia em meu computador, facilitando o desenvolvimento das automações.

### Executando os testes
Modo interativo: `npx cypress open`

### Caso de Teste Implementados
- Parte 1 (arquivo: Desafio_Parte1.cy.js)
  - Etapas:
    - Criar um usuário
    - Gerar um token de acesso
    - Confirmar se o usuário criado está autorizado
    - Listar os livros disponíveis
 
    
  - Dificuldades encontradas:
    - Passo executado: Clicar no título dos livros disponíveis.
    - Comportamento observado: Redireciona para uma tela em branco.
    - Comportamento esperado: Exibir detalhes do livro.
    
    <p align="center">
      <img  src="cypress/fixtures/images/parte_1.gif">
    </p>
