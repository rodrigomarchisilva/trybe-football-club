<!-- markdownlint-disable MD004 MD007 MD048 MD033-->
# :soccer: Football Club

## :open_book: Content (conteúdo)

- [:soccer: Football Club](#soccer-football-club)
  - [:open\_book: Content (conteúdo)](#open_book-content-conteúdo)
  - [:us: English](#us-english)
    - [:motorway: Routes](#motorway-routes)
    - [:deciduous\_tree: Development environment](#deciduous_tree-development-environment)
    - [:information\_source: Project info](#information_source-project-info)
    - [:printer: Cloning the project and opening it on VSCode](#printer-cloning-the-project-and-opening-it-on-vscode)
    - [:computer: How to run it locally](#computer-how-to-run-it-locally)
    - [:whale2: How to run it through docker](#whale2-how-to-run-it-through-docker)
    - [:whale: How to run it through docker-compose](#whale-how-to-run-it-through-docker-compose)
    - [:house: Home page](#house-home-page)
    - [:page\_with\_curl: About](#page_with_curl-about)
    - [:toolbox: Tools](#toolbox-tools)
    - [:file\_folder: Portfolio](#file_folder-portfolio)
    - [:link: External link to LinkedIn](#link-external-link-to-linkedin)
    - [:mag: Not found](#mag-not-found)
    - [:man\_artist: Preferences](#man_artist-preferences)
    - [:iphone: Responsiveness](#iphone-responsiveness)
  - [:brazil: Português](#brazil-português)
    - [:motorway: Rotas](#motorway-rotas)
    - [:deciduous\_tree: Ambiente de desenvolvimento](#deciduous_tree-ambiente-de-desenvolvimento)
    - [:information\_source: Informações do projeto](#information_source-informações-do-projeto)
    - [:printer: Clonando o projeto e abrindo no VSCode](#printer-clonando-o-projeto-e-abrindo-no-vscode)
    - [:computer: Como rodar localmente](#computer-como-rodar-localmente)
    - [:whale2: Como rodar através do docker](#whale2-como-rodar-através-do-docker)
    - [:whale: Como rodar através do docker-compose](#whale-como-rodar-através-do-docker-compose)
    - [:house: Página inicial](#house-página-inicial)
    - [:page\_with\_curl: Sobre](#page_with_curl-sobre)
    - [:toolbox: Ferramentas](#toolbox-ferramentas)
    - [:file\_folder: Portfólio](#file_folder-portfólio)
    - [:link: Link externo para o LinkedIn](#link-link-externo-para-o-linkedin)
    - [:mag: Página não encontrada](#mag-página-não-encontrada)
    - [:man\_artist: Preferências](#man_artist-preferências)
    - [:iphone: Responsividade](#iphone-responsividade)

## :us: English

### :motorway: Routes

- `/#/` - Home page;
- `/#/about` - About page, with information about the author;
- `/#/tools` - Technology tools page;
- `/#/portfolio` - Portfolio page, with links to source code and app;
- `/#/*` - Not found page.

### :deciduous_tree: Development environment

| Tool | Version |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.8.0 |
| [Docker](https://www.docker.com/) | 20.10.12 |
| [Docker Compose](https://docs.docker.com/compose/) | 1.29.2 |

### :information_source: Project info

* **Why I did this project:** I wanted to create a portfolio to show my skills and knowledge, and also to practice what I've learned so far;
* **Core Technologies:** React (w/ functional components), ContextAPI, Hooks, React-Bootstrap;
* **Secondary Technologies:** Docker (w/ compose);
* **Description:** This project was created to be a portfolio, with a home page, a page with information about me, a page with the technologies I used at least once, and a page with links to the applications I created and their source code. It also gives the user the ability to switch between light and dark themes, to alter the language between English and Portuguese, and to save preferences in the browser's local storage;
* **How this project was made:** I did it all by myself, including logic and design. Only a few functionalities were inspired by other sources, but I pointed them out in the code;
* **Commit history:** It might be a bit messy or cut by half in some projects, either because I had to migrate the project to a new repository and lost the first commits, or because, at the time, I had not yet learned how to use atomic and conventional commits.

### :printer: Cloning the project and opening it on VSCode

  **Prerequisites:**

  - You need to have [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer;
  - :warning: Operating System differences:
    - For **Windows**, backend `build` command should be `"build": "tsc_eval.bat",`
    - For **Linux**, backend `build` command should be `"build": "tsc_eval.sh",`
    - So be aware of that and change it accordingly before running the project.
  - Create a `.env` file, fill it with your personal info and save it in the **backend** root. It should look like this:

  ~~~env
  DB_USER=example_user
  DB_PASS=example_password
  DB_NAME=TRYBE_FUTEBOL_CLUBE
  DB_HOST=localhost
  DB_PORT=3306
  ~~~

  **1.** Clone the repository:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/rodrigomarchisilva.github.io.git
  ~~~

  **2.** Open the project:

  ~~~bash
    cd rodrigomarchisilva.github.io
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

### :computer: How to run it locally

  **1.** Install the dependencies:

  ~~~bash
    npm install
  ~~~

  **2.** Run the app:

  ~~~bash
    npm start
  ~~~

### :whale2: How to run it through docker

  **1.** Make sure you have Docker installed and running:

  ~~~bash
    docker -v
  ~~~

  **2.** If not, download and install it:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Build the image:

  ~~~bash
    docker build -t rodrigomarchisilva .
  ~~~

  **4.** Run the container:

  ~~~bash
    docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm rodrigomarchisilva
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

  **6.** Stop the container:

  ~~~bash
    npm run compose:down
  ~~~

### :house: Home page

![Home page](gifs/rms-home.gif)

> I will include a video presentation here in the future.

### :page_with_curl: About

![About](/gifs/rms-about.gif)

> It has in depht information about the me, with navigation links for the page itself.

### :toolbox: Tools

![Tools](/gifs/rms-tools.gif)

> It has all the technologies I used at least once, but most of them I used pretty often.

### :file_folder: Portfolio

![Portfolio](/gifs/rms-portfolio.gif)

> Brings projects I made, with links to the app and to the source code.

### :link: External link to LinkedIn

![LinkedIn](/gifs/rms-linkedin.gif)

> It redirects to my LinkedIn profile.

### :mag: Not found

![Not found](/gifs/rms-not-found.gif)

> A standard not found page, compromised by the use HashRouter, but I decided to keep it that way.

### :man_artist: Preferences

![Preferences](/gifs/rms-preferences.gif)

> User can change the theme of the app, as well as the language, and the changes can be saved in the local storage.

### :iphone: Responsiveness

![Responsiveness](/gifs/rms-responsiveness.gif)

> The app is responsive across all resolutions, thanks to React-Bootstrap's Grid System.

## :brazil: Português

### :motorway: Rotas

- `/#/` - Página inicial;
- `/#/about` - Página sobre o autor;
- `/#/tools` - Página com as ferramentas que o autor já utilizou;
- `/#/portfolio` - Página com os projetos do autor;
- `/#/*` - Página de erro 404.

### :deciduous_tree: Ambiente de desenvolvimento

| Ferramenta | Versão |
| ----------- | ------- |
| [Node](https://nodejs.org/en/) | 18.8.0 |
| [Docker](https://www.docker.com/) | 20.10.12 |
| [Docker Compose](https://docs.docker.com/compose/) | 1.29.2 |

### :information_source: Informações do projeto

* **Por que eu fiz esse projeto:** Eu fiz esse projeto para mostrar minhas habilidades em desenvolvimento web, e também para mostrar um pouco sobre mim, e os projetos que já fiz.
* **Tecnologias principais:** React (c/ componentes funcionais), ContextAPI, Hooks, CSS, React-Bootstrap;
* **Tecnologias secundárias:** Docker (c/ compose);
* **Descrição:** Esse projeto foi criado para ser um portfólio, com uma página inicial, uma página com informações sobre mim, uma página com as ferramentas que eu já utilizei, uma página com meus projetos e seus devidos linlks, e uma página de erro 404. Além disso, o usuário pode mudar o tema da aplicação, e a linguagem, e essas mudanças podem ser salvas no local storage;
* **Como esse projeto foi feito:** Eu fiz ele completamente por conta própria, tanto a lógica quanto o design. Somente algumas pequenas funcionalidades foram baseadas em tutoriais, mas eu apontei isso no código;
* **Histórico de commits:** Pode estar um pouco bagunçado ou cortado pela metade em alguns projetos, seja porque eu tive que migrar o projeto para um novo repositório e perdi os primeiros commits, ou porque eu ainda não tinha aprendido a usar commits atômicos e convencionais.

### :printer: Clonando o projeto e abrindo no VSCode

  **Pré-requisitos:** Você precisa ter o [Node.js](https://nodejs.org/en/) e o [Git](https://git-scm.com/) instalados no seu computador;

  **1.** Clone o repositório:

  ~~~bash
    git clone git@github.com:rodrigomarchisilva/rodrigomarchisilva.github.io.git
  ~~~

  **2.** Abra o projeto:

  ~~~bash
    cd rodrigomarchisilva.github.io
  ~~~

  **3.** Certifique-se de ter o VSCode instalado e rodando:

  ```bash
    code -v
  ```

  **4.** Se não tiver, baixe e instale:

  * [Download VSCode](https://code.visualstudio.com/download)

  **5.** Acesse-o pelo VSCode:

  ~~~bash
    code .
  ~~~

### :computer: Como rodar localmente

  **1.** Instale as dependências:

  ~~~bash
    npm install
  ~~~

  **2.** Rode o app:

  ~~~bash
    npm start
  ~~~

### :whale2: Como rodar através do docker

  **1.** Certifique-se de ter o Docker instalado e rodando:

  ~~~bash
    docker -v
  ~~~

  **2.** Se não tiver, baixe e instale:

  * [Download Docker](https://www.docker.com/products/docker-desktop)

  **3.** Faça o build da imagem:

  ~~~bash
    docker build -t rodrigomarchisilva .
  ~~~

  **4.** Rode o container:

  ~~~bash
    docker run -v ${PWD}:/app -v /app/node_modules -p 3000:3000 --rm rodrigomarchisilva
  ~~~

### :whale: Como rodar através do docker-compose

  **1.** Certifique-se de ter o Docker Compose instalado e rodando:

  ~~~bash
    docker-compose -v
  ~~~

  **2.** Se não tiver, baixe e instale:

  * [Download Docker Compose](https://docs.docker.com/compose/install/)

  **3.** Rode o container:

  ~~~bash
    npm run compose:up
  ~~~

  **4.** Pare o container:

  ~~~bash
    npm run compose:down
  ~~~

### :house: Página inicial

![Página inicial](gifs/rms-home.gif)

> Eu irei incluir uma apresentação em vídeo aqui no futuro.

### :page_with_curl: Sobre

![Sobre](/gifs/rms-about.gif)

> Contém informação detalhada sobre mim, com links de navegação para a página.

### :toolbox: Ferramentas

![Ferramentas](/gifs/rms-tools.gif)

> Tem todas as ferramentas que eu já utilizei, sendo que a maioria delas eu utilizei bastante.

### :file_folder: Portfólio

![Portfólio](/gifs/rms-portfolio.gif)

> Contém todos meus projetos, com links para o repositório e para o site onde hospedei.

### :link: Link externo para o LinkedIn

![LinkedIn](/gifs/rms-linkedin.gif)

> Redireciona para o meu perfil no LinkedIn.

### :mag: Página não encontrada

![Página não encontrada](/gifs/rms-not-found.gif)

> Página padrão para o erro 404. Está de certa forma comprometida por conta do HashRouter, mas decidi manter.

### :man_artist: Preferências

![Preferências](/gifs/rms-preferences.gif)

> O usuário poder mudar o tema da aplicação, assim como o idioma, e as mudanças podem ser salvas no local storage.

### :iphone: Responsividade

![Responsividade](/gifs/rms-responsiveness.gif)

> A aplicação é responsiva, e se adapta a qualquer tamanho de tela. Feito com o Grid System do React-Bootstrap.
