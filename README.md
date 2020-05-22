## Desenvolvimento de aplicacão para consulta de entregas

Neste projeto, podemos consultar a situação de entregas, se finalizadas ou não. Para consultar, é necessário informar o código da entrega. Caso haja alguma entrega cadastrada com o ID informado, são mostradas na tela informações sobre a mesma. Caso seja informado um código errado, é apresentada mensagem de erro.

Abaixo estão as telas da aplicação, em ordem: 
1. tela web principal 
2. tela web em caso de sucesso
3. tela web em caso de erro
4. tela mobile principal
5. tela mobile sucesso
6. tela mobilo erro

![Getting Started](./screens/tela-web-principal.png)

![Getting Started](./screens/tela-web-consulta-sucesso.png)

![Getting Started](./screens/tela-web-consulta-erro.png)

![Getting Started](./screens/tela-mobile-principal.png)

![Getting Started](./screens/tela-mobile-consulta-sucesso.png)

![Getting Started](./screens/tela-mobile-consulta-erro.png)


## Como trabalhar como este projeto:

**Ambiente de desenvolvimento**

- Clonar o projeto
- rodar **npm install** para instalar as dependências do projetor.
- rodar **node server.js** para iniciar o servidor.

**Ambiente de produção**

Para automatizar o ambiente produção, foi utilizado GULP, que cria e prepara os arquivos para produção.
Rodar **gulp** para iniciar.

_Esta aplicação foi desenvolvida com as seguintes ferramentas:_
- Express.js 
- SASS 
- Gulp 

