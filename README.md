# Projeto de Cadastro de Peças

Este é um projeto de exemplo que demonstra como criar uma aplicação web de cadastro de peças usando Angular para o front-end e .NET Core no Visual Studio Code para o backend.

## Visão Geral

Este projeto é uma aplicação web simples para gerenciar o cadastro de peças. Ele possui as seguintes funcionalidades:

- Cadastro de novas peças.
- Visualização da lista de peças cadastradas.
- Edição e exclusão de peças existentes.

## Tecnologias Utilizadas

- Angular para o front-end.
- .NET Core no Visual Studio Code para o backend.
- Banco de dados SQL Server para armazenar os dados.

## Configuração

Antes de executar a aplicação, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js e npm (para o front-end).
- Visual Studio Code (ou outra IDE de sua escolha) (para o backend e front-end).
- SQL Server (ou outro banco de dados compatível).

### Configurando o Front-end e Backend

1. Clone este repositório para o seu computador.
2. Abra o projeto no Visual Studio Code.
3. Navegue até a pasta `frontend` e execute `npm install` para instalar as dependências do front-end.
4. Navegue até a pasta `backend` e configure a conexão com o banco de dados no arquivo `appsettings.json`.
5. Execute a migração do banco de dados usando o Entity Framework Core: `dotnet ef database update`.
6. Inicie o projeto do backend e o servidor do front-end usando o Angular CLI.

O front-end estará disponível em `http://localhost:4200` e o backend em `http://localhost:5000`.

## Uso

1. Acesse a aplicação através do seu navegador.
2. Cadastre novas peças.
3. Visualize, edite ou exclua peças existentes.

## Contribuição

Sinta-se à vontade para contribuir para este projeto. Você pode abrir issues, fazer pull requests e sugerir melhorias.
