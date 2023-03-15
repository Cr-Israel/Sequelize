# Sequelize
<h2>Este projeto foi criado para treinar as habilidades com o ORM Sequelize, utilizando Node.js e MySQL como banco de dados.</h2>

<h4>Instalação:</h4>

Faça o clone deste repositório;
Rode o comando npm install ou yarn install para instalar as dependências do projeto;
Rode o comando npm start ou yarn start para iniciar o servidor.

<h4>Rotas:</h4>

POST /users
Cria um novo usuário. Deve receber no corpo da requisição um objeto JSON com os seguintes campos:

name: string
occupation: string
newsletter: boolean

GET /users
Retorna uma lista de todos os usuários cadastrados.

GET /users/:id
Retorna os dados de um usuário específico. O parâmetro id deve ser substituído pelo ID do usuário desejado.

PUT /users/:id
Atualiza os dados de um usuário específico. O parâmetro id deve ser substituído pelo ID do usuário que será atualizado. Deve receber no corpo da requisição um objeto JSON com os campos que serão atualizados.

DELETE /users/:id
Deleta um usuário específico. O parâmetro id deve ser substituído pelo ID do usuário que será deletado.

Contribuição
Sinta-se à vontade para contribuir com este projeto! Basta fazer um fork do repositório, fazer as alterações desejadas e enviar um pull request.

Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais informações.
