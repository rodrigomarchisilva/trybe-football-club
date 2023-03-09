# Sequelize summary

## Instalação e primeiras configurações

npm init -y
npm i nodemon sequelize mysql2 dotenv
npm i -D sequelize-cli
npx sequelize-cli init

* Criar: .env
* Renomear: config.json -> config.js
* Substituir: Código do config.js
* Alterar: Linha 8 do models/index.js para o importar arquivo config.js

---

## Ajustes no arquivo config/config.json

* username, password e database: Os do BD;
* host: Por ser local, o padrão é 127.0.0.1;
* dialect: O BD utilizado, por exemplo, "mysql".

---

## Verificações no MySQL

mysql -u root -p
show databases;
show tables from db_name;
show columns from table_name;

---

## Comandos sequelize

### Ajuda

* CheatSheet: <https://github.com/tryber/Trybe-CheatSheets/tree/master/backend/sequelize/setup>
* Documentação do Sequelize: <https://sequelize.org/master/manual/query-interface.html>
* Listar comandos: npx sequelize --help

### Banco de Dados

* Criar: npx sequelize db:create
* Derrubar: npx sequelize db:drop

### Criar a tabela no DB do sequelize

* Sintaxe: npx sequelize model:generate --name NomeDoModel --attributes nomeDoAtributo:string,outroAtributo:string
* --name: Nome da tabela, mas no singular
* --attributes: Atributos da tabela, separados por vírgula
* Gerar: npx sequelize model:generate --name User --attributes fullName:string
* Arquivos criados: models/user.js e migrations/XXXXXXXXXXXXXX-create-users.js

### migrations

* Gerar: npx sequelize migration:generate --name add-column-phone-table-users
* Executar: npx sequelize db:migrate
* Arquivo criado: migrations/XXXXXXXXXXXXXX-add-column-phone-table-users.js
* Reverter: npx sequelize db:migrate:undo
* Reverter todas: npx sequelize db:migrate:undo:all
* Reverter específica: npx sequelize db:migrate:undo --to XXXXXXXXXXXXXX-create-users.js

### seeders

* Gerar: npx sequelize seed:generate --name users
* Executar: npx sequelize db:seed:all
* Arquivo criado: seeders/XXXXXXXXXXXXXX-users.js
* Reverter: npx sequelize db:seed:undo:all

---

## Substituir programação orientada a objetos por funcional no models/user.js

~~~javascript
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
  });

  return User;
};

module.exports = User;
~~~

---

## Associações do sequelize

### 1:1 - Um para um

* hasOne -> Tem um relacionamento 1:1 (origem da foreignKey)
// Cada foreign key tem um relacionamento 1:1
Exemplo: Cada pessoa tem uma foto

* belongsTo -> Pertencente a um relacionamento 1:1 (recebe a foreignKey)
// Cada dado relacionado da tabela herdeira tem um relacionamento 1:1 com a foreignKey
Exemplo: Cada foto pertence a uma pessoa

### 1:N - Um para muitos

* hasMany -> Tem um relacionamento 1:N (origem da foreignKey)
// Cada foreign key tem um relacionamento 1:N com a tabela herdeira
Exemplo: Uma pessoa tem varias fotos

* belongsToMany -> Pertencente a um relacionamento 1:N (recebe as foreignKeys)
// Cada dado relacionado da tabela herdeira tem um relacionamento 1:N com a foreignKey
Exemplo: Uma foto pertence a varias pessoas

### N:N - Muitos para muitos

* belongsToMany -> Pertencente a um relacionamento N:N (recebe as foreignKeys)
// Cria os models, gera os migrations, altera o necessário, gera os seeds separadamente na ordem de foreignKeys, altera o necessário, executa os migrations e os seeds
Exemplo: Muitas pessoas podem estar em uma foto e muitas fotos podem ter a mesma pessoa. Usa-se uma tabela de junção.

---

## Utilização dos relacionamentos

* Eager Loading:
// Carrega todos os dados na mesma request. Todas as informações são trazidas, independente se serão usadas ou não. Útil quando se precisa de todos os dados das entidades envolvidas.

* Lazy Loading:
// Consiste em não especificar uma propriedade includes no momento de realizar a query no banco. Assim, cria-se a possibilidade de ter dois usos para o mesmo endpoint.

---

## ACID

* Atomic (atomicidade): Ou todas operações têm sucesso, ou a transação toda falha;
* Consistent (consistência): Todas regras do BD devem ser respeitadas (estrutura de tabelas, chaves estrangeiras, campos restritos etc.);
* Isolated (isolamento): Uma transação não pode interferir na outra. Cada uma deve ser isolada das demais;
* Durability (durabilidade): Com a transação finalizada, os dados devem ser alterados permanentemente, só podendo ser alterados por outra transação.

---

## JWT

1. O navegador pede login e senha;
2. O servidor verifica se o login e senha são válidos;
3. Se sim, o servidor gera dois objetos, tokenInfo (header) + userData e permissions (payload);
4. O navegador converte o header e o payload em JSON, junta em uma string e usa o algoritmo HMAC para criptografar a string (signature);
5. O navegador cria o token com o header, o payload e a signature;
6. O navegador envia o token ao cliente.

### Na requisição seguinte

1. O navegador envia os dados e o token;
2. O servidor verifica cria novamente a signature;
3. O servidor verifica se as signatures batem;
4. Se sim, o servidor segue coma a requisição.

### HMAC

>HMAC(K, m) = hash(K1 + hash(K2 + m))

* K: Chave secreta;
* m: Mensagem;
* hash: Função de hash escolhida (md5, sha1, sh256, etc.);
* K1 e K2: Chaves secretas derivadas da chave original K;
* +: Operação de concatenação de strings.

---

## Instalação do JWT

* npm i jsonwebtoken
* npm i -D mocha chai sinon
* npm i -D chai-http
* npm i -D nyc (CLI do Istanbul)

---

## Testes

### Script

* "test": "mocha ./tests/**/*$NAME*.test.js --exit",

### BD temporário

* Gerar um banco de dados qualquer definido como BD de development, onde seriam feitas operações de IO.

### Bibliotecas

* Sequelize Test Helpers: <https://www.npmjs.com/package/sequelize-test-helpers?activeTab=readme>

### Gerar stubs simples direcionando para funções falsas

* Produzir quase hardcoded, aquilo que se espera da consulta de um modelo do Sequelize (X retorna Y).

### Plugin Chai HTTP

* <https://www.chaijs.com/plugins/chai-http/>

---

## Simulação de chamadas http com o método request

### Podemos chamar um `GET` que deve consumir nossa api, sem que pra isso precisemos subir ela manualmente

~~~javascript
const response = await chai.request(server)
  .get('/exemplo');
~~~

### Da mesma forma, podemos chamar um `POST` passando um `body` e/ou um `header`, por exemplo

~~~javascript
const response = await chai.request(server)
  .post('/favorite-foods')
  .set('X-API-Key', 'foobar')
  .send({
      name: 'jane',
      favoriteFood: 'pizza'
  });
~~~

---

* callFake -> Substitui a chamada do método original, por aquela passada como parâmetro.
* Conjunto before e after -> Está um nível antes do teste específico, no escopo principal, pois é possível definir a aplicação e restauração do stub somente uma vez, e utilizar em mais de um teste.

---

### Critérios relevantes da cobertura

* Cobertura de Funções / Function Coverage: Cada função/sub-rotina do script foi acionado/chamado?
* Cobertura de Afirmações / Statement Coverage: Cada afirmação/definição/comando do script foi executado?
* Cobertura de Ramificações / Branch Coverage: Cada situação de ramificação do código (como uma condicional if) foi executada?

### Script para rodar o nyc

* "test": "mocha ./tests --recursive",
* "test:coverage": "nyc npm test",

### Personalização do script de cobertura

* "test": "mocha ./tests --recursive",
* "test:coverage": "nyc --include='src/**/*.js' npm run test",
* parâmetro --all: Para coletar a cobertura de todos os arquivos, mesmo os não referenciados.

>Notem aqui, que estamos colocando o código fonte que deve ser coberto (no nosso contexto, seriam /api , /config , /controllers , /migrations , /models e /seeders ) dentro de uma pasta ./src na raiz , para que não seja necessário criar uma lista de exclusão de cobertura (para pasta node_modules ou a própria pasta tests , por exemplo), nesse sentido, também é importante manter a pasta tests na raiz.

### Script final

* "test": "mocha ./tests/**/*$NAME*.test.js --exit",
* "test:coverage": "nyc --include='src/**/*.js' npm run test",

npm run test:coverage
