# 📚 BookFlow

> **Sistema de gerenciamento de biblioteca escolar**

O **BookFlow** é uma aplicação web desenvolvida para auxiliar na gestão de uma biblioteca escolar, centralizando informações sobre **usuários, livros e empréstimos** em um único sistema.

O projeto foi desenvolvido com **React no frontend**, **Node.js + Express no backend**, **Prisma como ORM** e **PostgreSQL como banco de dados**.

---

## 🖥️ Sobre o projeto

O BookFlow foi criado a partir de uma situação comum em bibliotecas: a necessidade de organizar o controle de livros, usuários e empréstimos sem depender de processos manuais.

A aplicação tem como principal usuário a **bibliotecária**, que pode utilizar o sistema para consultar o acervo, gerenciar usuários e acompanhar os empréstimos.

### 💡 Problema

Entre os principais problemas identificados estão:

* Dificuldade para controlar empréstimos manualmente;
* Falta de centralização das informações;
* Dificuldade para consultar usuários;
* Dificuldade para localizar livros;
* Controle de disponibilidade dos exemplares;
* Possibilidade de erros durante registros manuais;
* Dificuldade para acompanhar o histórico das operações.

### 🎯 Solução

O BookFlow busca centralizar essas operações em uma aplicação web, permitindo que a bibliotecária tenha acesso às principais informações da biblioteca através de uma interface única.

---

## ✨ Principais funcionalidades

### 👤 Usuários

O módulo de usuários possui integração com a API e permite:

* Listar usuários;
* Cadastrar usuários;
* Consultar usuário por ID;
* Editar usuários;
* Excluir usuários;
* Cadastrar matrícula;
* Cadastrar nome;
* Cadastrar e-mail;
* Cadastrar telefone;
* Definir status do usuário.

### 📚 Livros

O módulo de livros possui interface para gerenciamento do acervo.

Atualmente possui:

* Listagem de livros;
* Busca de livros na interface;
* Cadastro de livros;
* Informações do título;
* Autor;
* Categoria;
* Ano de publicação;
* Quantidade de exemplares;
* Quantidade disponível;
* Campo para URL da capa/imagem do livro.

### 📖 Empréstimos

O sistema possui a interface de empréstimos e a estrutura inicial no backend.

A proposta do módulo é permitir que a bibliotecária trabalhe com:

* Usuário através da matrícula;
* Livro através do nome;
* Controle de empréstimos;
* Consulta dos empréstimos registrados.

A API atualmente possui a consulta dos empréstimos. As operações de criação, edição e exclusão ainda fazem parte do desenvolvimento.

### 🔄 Devoluções

O frontend possui uma tela específica para devoluções.

A funcionalidade está relacionada ao fluxo de controle dos exemplares e será integrada às regras de disponibilidade dos livros conforme o desenvolvimento do sistema.

### 📊 Relatórios

O frontend possui uma área de relatórios planejada para apresentar informações como:

* Empréstimos por período;
* Livros mais emprestados;
* Atividades recentes;
* Informações da biblioteca.

### 📌 Reservas

Também existe uma área específica para reservas no frontend, preparada para futuras implementações relacionadas ao controle de reservas de livros.

---

# 🎨 Interface

A interface foi desenvolvida pensando na utilização por uma bibliotecária, buscando manter as informações organizadas e facilitar o acesso às principais funções.

O frontend possui:

* Tela de login;
* Dashboard;
* Menu lateral;
* Usuários;
* Cadastro de usuário;
* Edição de usuário;
* Livros;
* Cadastro de livro;
* Empréstimos;
* Novo empréstimo;
* Devoluções;
* Relatórios;
* Reservas;
* Layout responsivo;
* Ícones através do Lucide React.

---

## 📸 Telas do sistema

> As imagens abaixo podem ser adicionadas posteriormente ao README para apresentar visualmente o projeto.

### 🔐 Login

```text
[Adicionar screenshot da tela de Login]
```

### 📊 Dashboard

```text
[Adicionar screenshot do Dashboard]
```

### 👤 Usuários

```text
[Adicionar screenshot da tela de Usuários]
```

### 📚 Livros

```text
[Adicionar screenshot da tela de Livros]
```

### 📖 Empréstimos

```text
[Adicionar screenshot da tela de Empréstimos]
```

---

# 🧩 Tecnologias utilizadas

## Frontend

| Tecnologia   | Utilização                          |
| ------------ | ----------------------------------- |
| React        | Construção da interface             |
| Vite         | Ambiente de desenvolvimento e build |
| JavaScript   | Lógica da aplicação                 |
| React Router | Navegação entre páginas             |
| CSS          | Estilização                         |
| Lucide React | Ícones da interface                 |

## Backend

| Tecnologia | Utilização                           |
| ---------- | ------------------------------------ |
| Node.js    | Ambiente de execução                 |
| Express    | Construção da API REST               |
| Prisma     | ORM                                  |
| PostgreSQL | Banco de dados                       |
| CORS       | Comunicação entre frontend e backend |
| dotenv     | Variáveis de ambiente                |

## Ferramentas

* Visual Studio Code
* Git
* GitHub
* PostgreSQL
* Prisma
* Vite

---

# 🏗️ Arquitetura

O projeto foi separado em **frontend** e **backend**, permitindo separar a interface da aplicação das regras de negócio e acesso ao banco de dados.

```text
BookFlow
│
├── FRONTEND
│   │
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
└── BACKEND
    │
    ├── src
    │   ├── controllers
    │   ├── routes
    │   ├── services
    │   └── server.js
    │
    ├── prisma
    │   ├── migrations
    │   └── schema.prisma
    │
    ├── prisma.js
    ├── prisma.config.ts
    └── package.json
```

---

# 🔄 Fluxo da aplicação

O BookFlow utiliza uma arquitetura em camadas.

```text
┌─────────────────┐
│     React       │
│    Frontend     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   API / Fetch   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Routes      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Controllers   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Services     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│     Prisma      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   PostgreSQL    │
└─────────────────┘
```

### Exemplo: cadastro de usuário

```text
Formulário React
       ↓
POST /novoUser
       ↓
Route
       ↓
Controller
       ↓
Service
       ↓
Prisma
       ↓
PostgreSQL
       ↓
Resposta da API
       ↓
React
```

Essa separação permite organizar melhor as responsabilidades de cada parte da aplicação.

---

# 🗄️ Banco de dados

O banco de dados utiliza **PostgreSQL** e é gerenciado através do **Prisma ORM**.

Atualmente existem três principais modelos:

```text
┌──────────────┐
│    Usuario   │
└──────┬───────┘
       │
       │ 1:N
       ▼
┌──────────────┐
│  Emprestimo  │
└──────┬───────┘
       │
       │ N:1
       ▼
┌──────────────┐
│     Livro    │
└──────────────┘
```

## 👤 Usuario

```text
id
nome
matricula
email
telefone
status
```

A matrícula e o e-mail são campos únicos.

---

## 📚 Livro

```text
id
titulo
autor
categoria
anoPublicado
quantidade
quantidadeDisponivel
fotoUrl
```

O campo `quantidadeDisponivel` permite representar quantos exemplares estão disponíveis para empréstimo.

O campo `fotoUrl` permite armazenar uma referência para a imagem/capa do livro.

---

## 📖 Emprestimo

```text
id
usuarioId
livroId
```

O empréstimo possui relacionamento com:

```text
Usuario
   ↓
Emprestimo
   ↓
Livro
```

Assim, cada empréstimo relaciona um usuário a um livro.

---

# 🔌 API REST

O backend foi desenvolvido utilizando Express.

## 👤 Usuários

| Método | Rota            | Função            |
| ------ | --------------- | ----------------- |
| GET    | `/novoUser`     | Listar usuários   |
| GET    | `/novoUser/:id` | Buscar usuário    |
| POST   | `/novoUser`     | Cadastrar usuário |
| PUT    | `/novoUser/:id` | Atualizar usuário |
| DELETE | `/novoUser/:id` | Excluir usuário   |

## 📚 Livros

| Método | Rota      | Função          |
| ------ | --------- | --------------- |
| GET    | `/livros` | Listar livros   |
| POST   | `/livros` | Cadastrar livro |

Outras operações do CRUD de livros ainda podem ser adicionadas.

## 📖 Empréstimos

| Método | Rota           | Função             |
| ------ | -------------- | ------------------ |
| GET    | `/emprestimos` | Listar empréstimos |

As operações de criação, atualização e exclusão de empréstimos ainda estão em desenvolvimento.

---

# 📁 Organização do Backend

O backend utiliza uma separação entre **rotas, controllers e services**.

### Routes

Responsáveis por definir os endpoints:

```text
routes/
├── usuarioRoutes.js
├── livrosRoutes.js
└── emprestimoRoutes.js
```

### Controllers

Responsáveis por receber as requisições e devolver as respostas:

```text
controllers/
├── usuarioController.js
├── livroController.js
└── emprestimoController.js
```

### Services

Responsáveis pela comunicação com o Prisma e pelas operações relacionadas aos dados:

```text
services/
├── usuarioServices.js
├── livroServices.js
└── emprestimoServices.js
```

---

# 🌐 Rotas do Frontend

O React Router organiza as principais páginas da aplicação:

```text
/login

/
/emprestimos
/emprestimos/novo
/devolucoes
/livros
/usuarios
/usuario/novousuario
/usuario/editar/:id
/livro/novo
/relatorios
/reservas
```

A aplicação utiliza um `Layout` compartilhado para as páginas internas e uma `Sidebar` para navegação.

---

# 📦 Instalação

## 1. Clone o projeto

```bash
git clone https://github.com/Natanaelscb/projeto-biblioteca.git
```

Entre na pasta:

```bash
cd projeto-biblioteca
```

---

## 2. Frontend

Entre na pasta:

```bash
cd FRONTEND
```

Instale as dependências:

```bash
npm install
```

Execute:

```bash
npm run dev
```

---

## 3. Backend

Abra outro terminal e entre na pasta:

```bash
cd BACKEND
```

Instale as dependências:

```bash
npm install
```

---

# 🔐 Configuração do banco

Crie um arquivo `.env` dentro da pasta `BACKEND`.

Exemplo:

```env
DATABASE_URL="postgresql://USUARIO:SENHA@localhost:5432/bookflow"
```

Configure os dados de acesso do seu PostgreSQL.

Depois, sincronize o banco com o schema:

```bash
npx prisma db push
```

Ou utilize as migrations existentes:

```bash
npx prisma migrate dev
```

---

# ▶️ Executando o backend

Dentro da pasta `BACKEND`:

```bash
node src/server.js
```

O servidor será iniciado na porta:

```text
http://localhost:3001
```

---

# ▶️ Executando o frontend

Dentro da pasta `FRONTEND`:

```bash
npm run dev
```

O Vite informará no terminal o endereço local da aplicação, normalmente:

```text
http://localhost:5173
```

---

# 🔒 Variáveis de ambiente

Informações sensíveis não devem ser armazenadas diretamente no código.

O arquivo `.env` deve permanecer fora do Git:

```gitignore
.env
node_modules/
dist/
```

---

# 📈 Status do projeto

O BookFlow encontra-se em **desenvolvimento**.

### Frontend

* [x] Estrutura React + Vite
* [x] React Router
* [x] Layout
* [x] Sidebar
* [x] Login
* [x] Dashboard
* [x] Tela de usuários
* [x] Cadastro de usuário
* [x] Edição de usuário
* [x] Tela de livros
* [x] Cadastro de livro
* [x] Tela de empréstimos
* [x] Tela de novo empréstimo
* [x] Tela de devoluções
* [x] Tela de relatórios
* [x] Tela de reservas

### Backend

* [x] Express
* [x] CORS
* [x] Prisma
* [x] PostgreSQL
* [x] Estrutura de Routes
* [x] Estrutura de Controllers
* [x] Estrutura de Services
* [x] CRUD de usuários
* [x] Listagem de livros
* [x] Cadastro de livros
* [x] Listagem de empréstimos
* [ ] CRUD completo de livros
* [ ] Criação de empréstimos
* [ ] Atualização de empréstimos
* [ ] Exclusão de empréstimos
* [ ] Regras completas de devolução
* [ ] Controle automático de disponibilidade

### Autenticação

* [x] Interface de login
* [ ] Autenticação real
* [ ] Controle de sessão
* [ ] Controle de permissões

---

# 🚀 Próximos passos

Entre as próximas etapas planejadas para o projeto estão:

* [ ] Finalizar o fluxo de empréstimos;
* [ ] Implementar criação de empréstimos pela API;
* [ ] Implementar devoluções;
* [ ] Atualizar automaticamente a quantidade disponível dos livros;
* [ ] Finalizar CRUD de livros;
* [ ] Implementar autenticação;
* [ ] Implementar controle de permissões;
* [ ] Integrar os relatórios aos dados reais;
* [ ] Implementar reservas;
* [ ] Criar histórico de empréstimos;
* [ ] Implementar controle de atrasos;
* [ ] Melhorar validações dos formulários;
* [ ] Realizar deploy da aplicação.

---

# 🎓 O que foi aplicado no projeto

Durante o desenvolvimento do BookFlow foram aplicados conceitos de desenvolvimento **frontend, backend e banco de dados**, incluindo:

* Componentização com React;
* Hooks;
* `useState`;
* `useEffect`;
* React Router;
* Formulários;
* Eventos e manipulação de estado;
* Consumo de API com `fetch`;
* JavaScript;
* API REST;
* Métodos HTTP;
* Express;
* Rotas;
* Controllers;
* Services;
* Prisma ORM;
* PostgreSQL;
* Relacionamentos entre tabelas;
* CRUD;
* Variáveis de ambiente;
* Git;
* GitHub;
* Organização de projetos em camadas.

---

# 🧠 Aprendizado

O desenvolvimento do BookFlow permitiu compreender, na prática, como diferentes tecnologias trabalham juntas em uma aplicação web.

O fluxo principal aprendido durante o projeto foi:

```text
React
  ↓
Fetch / API
  ↓
Express
  ↓
Route
  ↓
Controller
  ↓
Service
  ↓
Prisma
  ↓
PostgreSQL
```

Isso permitiu sair de uma aplicação inicialmente focada apenas na interface para uma estrutura com **frontend, API, regras de acesso aos dados e banco de dados relacional**.

---

# 👨‍💻 Desenvolvedor

**Natanael Santos da Costa Barros**

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento de software.

---

# 📌 Status

🚧 **Em desenvolvimento**

O projeto continua recebendo melhorias e novas funcionalidades, principalmente relacionadas ao fluxo completo de empréstimos, devoluções, autenticação e integração dos módulos restantes com o backend.

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e educacionais.
