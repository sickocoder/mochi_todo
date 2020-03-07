# Mochi Shopping Cart

Este site é simula um carrinho de compras baseando-se nos comportamentos de TodoList, o quer dizer que o usuário pode criar, editar, ecluir um dado producto e limpar também o carrinho todo por completo.

## Requisitos

Para rodar este projecto é você precisa ter instalado na sua máquina:
- NodeJS (versão 11+)
- npm ou yarn
  
Precisará também instalar a biblioteca [json-server](https://github.com/typicode/json-server). Eis abaixo as instruções:

#### Yarn
```
yarn add global json-server
```

#### NPM
```
npm install -g json-server
```

## Instalação

Para rodar o projecto em sua máquina você deve navegar até ao directório do projecto(clonado) e digitar os seguintes comandos no seu terminal:

```
yarn install ou npm install
```
```
json-server src/FakeServer/data.js --port 3333
```
```
yarn start ou npm start
```

Depois de tudo só precisa abrir o broswer(caso não abra de forma automática) e acessar: http://localhost:3000

## Tecnologias e bibliotecas usadas

* [styled-components](https://styled-components.com/) - Usado para criar e estilizar componentes da UI
* [react-redux](https://react-redux.js.org/) - Usado para gerir o estado e manter a lógica da aplicação
* [redux-saga](https://redux-saga.js.org/) - Integrado com o redux sendo responsável pelos efeitos colaterais (chamadas à API)
* [axios](https://github.com/axios/axios) - Para comunicar com o "FakeServer" (json-server)
