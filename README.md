# Back-end Case MindGroup
Este projeto foi criado com o propósito de servir as necessidades do caso de processo seletivo da empresa Mind Group Consulting.

## Requisitos do Seletivo
Servir um back-end usando o framework Express ou NestJs, utilizando a Linguagem TypeScript, e com banco de dados feito em MySQL. O back-end deve ter funções de CRUD: ( create, read, update and delete ).

## Intruções para Instalação e Inicialização do Projeto
Importar o dump do banco de dados MySQL

Após clonar o repositório do git, execute o seguinte comando para instalar as dependências:
```bash
npm install
```

Após a instalação das dependências, o projeto está pronto para ser inicializado, com as seguintes possibilidades:
##

* Servidor de Testes
```bash
npm run dev
```
##
* Servidor de Produção

Para isso será necessário compilar os arquivos primeiro:
```bash 
npx tsc ou npm run build
```
E então executar o seguinte comando:
```bash 
npm run start
```

## Endpoints 

| Método| URL | Função |
 |----------|----------|----------| 
 | POST | /produtos | Criação de produtos| 
 | PATCH| /produtos | Editar um produto |
 | GET | /produtos | Lista os produtos|
 |GET | /produtos/:id | Lista um produto individual |
 |DELETE | /api/produtos/:id | Deleta um produto|
 |GET | /produtos/movimentacao | Lista as movimentações |
 |POST | /auth/login | Faz login|
 |POST | /user | Faz cadastro|
 |GET  | /auth/profile | Lista o usuário autenticado |
 
 ##
+ POST /produtos
	- nome: string*
	- descricao: string*
	- imagem: File*
	- valor: number*
	- estoque: number*
	##
+ PATCH /produtos
	- id: number*
	- nome: string
	- descricao: string
	- imagem: File
	- valor: number
	- estoque: number
	##
+   POST /auth/login
    - senha: string*
    - email: string*
    ##
 + POST /user
	 - nome: string*
    - senha: string*
    - email: string*