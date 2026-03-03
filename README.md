# wiki-github-react

Aplicação web para buscar e gerenciar repositórios do GitHub, desenvolvida com React e Vite.

## 🚀 Tecnologias

- [React](https://react.dev/) ^19.2.0
- [Vite](https://vite.dev/) ^7.3.1
- [styled-components](https://styled-components.com/) ^6.3.11
- [axios](https://axios-http.com/) ^1.13.6

## 📋 Funcionalidades

- Buscar repositórios pelo nome (ex: `usuario/repositorio`) via [API do GitHub](https://api.github.com)
- Listar os repositórios encontrados
- Evitar duplicatas na lista
- Remover repositórios da lista
- Exibir mensagens de erro para repositórios não encontrados ou já adicionados

## 🗂️ Estrutura do projeto

```
src/
├── assets/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   └── Button.styles.js
│   ├── Input/
│   │   ├── Input.jsx
│   │   └── Input.styles.js
│   └── ItemRepo/
│       ├── ItemRepo.jsx
│       └── ItemRepo.styles.js
├── pages/
│   ├── App.jsx
│   └── styles.js
├── services/
│   └── api.js
├── main.jsx
└── styles.js
```

## ⚙️ Como executar

**Pré-requisitos:** Node.js `^20.19.0` ou `>=22.12.0`

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Pré-visualizar o build
npm run preview
```

## 🔍 Lint

```bash
npm run lint
```
