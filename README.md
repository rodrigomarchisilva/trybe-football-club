<!-- markdownlint-disable MD004 MD007 MD048 MD033 MD024-->
# :soccer: Football Club

## :open_book: Content (conteúdo)

- [:soccer: Football Club](#soccer-football-club)
  - [:open\_book: Content (conteúdo)](#open_book-content-conteúdo)
  - [:us: English](#us-english)
    - [:deciduous\_tree: Development environment](#deciduous_tree-development-environment)
    - [:information\_source: Project info](#information_source-project-info)
    - [:printer: Cloning the project and opening it on VSCode](#printer-cloning-the-project-and-opening-it-on-vscode)
    - [:whale: How to run it through docker-compose](#whale-how-to-run-it-through-docker-compose)
    - [:art: Frontend](#art-frontend)
    - [:gear: Backend](#gear-backend)
    - [:floppy\_disk: Database](#floppy_disk-database)
  - [:brazil: Português](#brazil-português)
    - [:deciduous\_tree: Ambiente de desenvolvimento](#deciduous_tree-ambiente-de-desenvolvimento)
    - [:information\_source: Informações do projeto](#information_source-informações-do-projeto)
    - [:printer: Clonando o projeto e abrindo no VSCode](#printer-clonando-o-projeto-e-abrindo-no-vscode)
    - [:whale: Como executar através do docker-compose](#whale-como-executar-através-do-docker-compose)
    - [:art: Frontend](#art-frontend-1)
    - [:gear: Backend](#gear-backend-1)
    - [:floppy\_disk: Banco de dados](#floppy_disk-banco-de-dados)

## :us: English

### :deciduous_tree: Development environment

| Tool | Version |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.12.1 |
| [Docker](https://www.docker.com/) | 20.10.20 |
| [Docker Compose](https://docs.docker.com/compose/) | 2.12.0 |
| [Windows](https://www.microsoft.com/en-us/windows) | 10 |

### :information_source: Project info

* **Why I did this project:** This project is from Trybe's course, Module 3 - Back-end Development. Its main goal is to practice TypeScript with the Sequelize ORM, and build a docker-compose for a full-stack application.
* **Backend Technologies:** TypeScript, Node.js, Express, Sequelize, Mocha, Chai, Sinon.
* **Frontend Technologies:** JavaScript, React, Axios, React Router.
* **Secondary Technologies:** Docker (w/ compose);
* **Description:** It provides information about football matches and classifications. I'm responsible for the whole backend, its tests and the database, as well as the docker-compose for the whole application. Trybe provided the frontend.

### :printer: Cloning the project and opening it on VSCode

  **Prerequisites:** You need to have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer;

  **1.** Clone the repository:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/trybe-football-club.git
  ~~~

  **2.** Open the project:

  ~~~bash
    cd trybe-football-club
  ~~~

  **3.** Make sure you have VSCode installed and running:

  ```bash
    code -v
  ```

  **4.** If not, download and install it:

  * [Download VSCode](https://code.visualstudio.com/download)

  **5.** Access it through VSCode:

  ~~~bash
    code .
  ~~~

### :whale: How to run it through docker-compose

  **1.** Make sure you have Docker installed and running:

  ~~~bash
    docker -v
  ~~~

  **2.** If not, download and install it:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Make sure you have Docker Compose installed and running:

  ~~~bash
    docker-compose -v
  ~~~

  **4.** If not, download and install it:

  * [Download Docker Compose](https://docs.docker.com/compose/install/)

  **5.** Run the container:

  ~~~bash
    npm run compose:up
  ~~~

  * Now you should be able to access the application through the browser:
    * [Frontend - http://localhost:3000](http://localhost:3000)
    * [Backend - http://localhost:3001](http://localhost:3001)
    * [Database - http://localhost:3002](http://localhost:3002)

  **6.** Stop the container:

  ~~~bash
    npm run compose:down
  ~~~

### :art: Frontend

* After running it with docker-compose, access the frontend through the browser:
  * [http://localhost:3000](http://localhost:3000)

* Frontend documentation:
  * [README](app/frontend/README.md)

### :gear: Backend

* After running it with docker-compose, access the backend through the browser:
  * [http://localhost:3001](http://localhost:3001)

* Backend documentation:
  * [README](app/backend/README.md)

### :floppy_disk: Database

* After running it with docker-compose, access the database through the browser:
  * [http://localhost:3002](http://localhost:3002)

## :brazil: Português

### :deciduous_tree: Ambiente de desenvolvimento

| Ferramenta | Versão |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.12.1 |
| [Docker](https://www.docker.com/) | 20.10.20 |
| [Docker Compose](https://docs.docker.com/compose/) | 2.12.0 |
| [Windows](https://www.microsoft.com/en-us/windows) | 10 |

### :information_source: Informações do projeto

* **Por que eu fiz esse projeto:** Esse projeto é do curso da Trybe, Módulo 3 - Desenvolvimento Back-end. O objetivo principal é a prática do TypeScript junto ao ORM Sequelize, e a construção de um docker-compose para uma aplicação full-stack.
* **Tecnologias do Backend:** TypeScript, Node.js, Express, Sequelize, Mocha, Chai, Sinon.
* **Tecnologias do Frontend:** JavaScript, React, Axios, React Router.
* **Tecnologias secundárias:** Docker (c/ compose);
* **Descrição:** Fornece informações sobre partidas de futebol e classificações. Eu sou responsável por todo o backend, seus testes e o banco de dados, assim como o docker-compose para toda a aplicação. A Trybe forneceu o frontend.

### :printer: Clonando o projeto e abrindo no VSCode

  **Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados no seu computador;

  **1.** Clone o repositório:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/trybe-football-club.git
  ~~~

  **2.** Abra o projeto:

  ~~~bash
    cd trybe-football-club
  ~~~

  **3.** Certifique-se de que o VSCode está instalado e em execução:

  ```bash
    code -v
  ```

  **4.** Se não estiver, faça o download e instale-o:

  * [Download VSCode](https://code.visualstudio.com/download)

  **5.** Acesse-o através do VSCode:

  ~~~bash
    code .
  ~~~

### :whale: Como executar através do docker-compose

  **1.** Certifique-se de que o Docker está instalado e em execução:

  ~~~bash
    docker -v
  ~~~

  **2.** Se não estiver, faça o download e instale-o:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Certifique-se de que o Docker Compose está instalado e em execução:

  ~~~bash
    docker-compose -v
  ~~~

  **4.** Se não estiver, faça o download e instale-o:

  * [Download Docker Compose](https://docs.docker.com/compose/install/)

  **5.** Execute o container:

  ~~~bash
    npm run compose:up
  ~~~

  * Agora você deve poder acessar o aplicativo através do navegador:
    * [Frontend - http://localhost:3000](http://localhost:3000)
    * [Backend - http://localhost:3001](http://localhost:3001)
    * [Database - http://localhost:3002](http://localhost:3002)

  **6.** Pare o container:

  ~~~bash
    npm run compose:down
  ~~~

### :art: Frontend

* Depois de executá-lo com o docker-compose, acesse o frontend através do navegador:
  * [http://localhost:3000](http://localhost:3000)

* Documentação do frontend:
  * [README](app/frontend/README.md)

### :gear: Backend

* Depois de executá-lo com o docker-compose, acesse o backend através do navegador:
  * [http://localhost:3001](http://localhost:3001)

* Documentação do backend:
  * [README](app/backend/README.md)

### :floppy_disk: Banco de dados

* Depois de executá-lo com o docker-compose, acesse o banco de dados através do navegador:
  * [http://localhost:3002](http://localhost:3002)
