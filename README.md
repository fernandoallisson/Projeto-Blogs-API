# :construction: Projeto Blogs API :construction:
Este projeto é uma aplicação de backend que utiliza o framework Express.js para criar uma API RESTful. Aqui está uma visão geral das principais características e funcionalidades:

## Tecnologias Utilizadas:
### Express.js: 
Framework de Node.js para construir aplicativos da web e APIs.
### JWT (JSON Web Token): 
Utilizado para autenticação de usuários, gerando tokens de acesso.
### Joi: 
Biblioteca de validação de dados para validar os dados de entrada nos endpoints da API.
### Morgan: 
Middleware de logger para registrar solicitações HTTP.
### MySQL2: 
Driver de MySQL para Node.js, utilizado para interagir com o banco de dados MySQL.
### Sequelize: 
ORM (Object-Relational Mapping) para Node.js, utilizado para mapear objetos JavaScript para modelos de banco de dados relacionais.
## Funcionalidades Principais:
### Autenticação de Usuários: 
Utiliza JWT para autenticar usuários com email e senha.
### Gerenciamento de Usuários: 
CRUD (Create, Read, Update, Delete) de usuários, incluindo operações como buscar todos os usuários, buscar usuário por ID e exclusão de usuário.
### Gerenciamento de Categorias: 
CRUD de categorias, permitindo criar novas categorias e listar todas as categorias existentes.
### Gerenciamento de Postagens de Blog: 
CRUD de postagens de blog, incluindo operações como criar nova postagem, listar todas as postagens, buscar postagem por ID, atualizar postagem e excluir postagem.
### Validação de Dados: 
Utiliza Joi para validar os dados de entrada nos endpoints da API, garantindo a integridade dos dados.
### Middleware de Validação de Token: 
Um middleware é utilizado para validar o token de autenticação enviado nos cabeçalhos das solicitações HTTP.
## Arquitetura:
A aplicação segue uma arquitetura MVC (Model-View-Controller), onde os modelos representam os dados do aplicativo, as visualizações lidam com a renderização dos dados para o usuário e os controladores controlam o fluxo de dados entre os modelos e as visualizações.
Os arquivos estão estruturados em pastas como src/controller, src/models, src/routes, src/service, etc., para manter o código organizado e modularizado.
Também são utilizados arquivos de migração para controlar as alterações no banco de dados.
Esta aplicação fornece uma base sólida para criar e gerenciar uma API RESTful com Node.js e Express, com funcionalidades completas de autenticação de usuários, gerenciamento de dados e segurança.