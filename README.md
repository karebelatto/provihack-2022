# provihack-2022

Hackathon da Provi do 1° semestre de 2022

![unnamed (1)](https://user-images.githubusercontent.com/80927197/166059633-974ec4c6-e85c-4bb4-8dbe-1ce2bbc450c0.jpg)

## Descrição do Projeto

### COMO A TECNOLOGIA PODE COMBATER AS MUDANÇAS CLIMÁTICAS E SEUS IMPACTOS

### Mobilidade urbana com baixa emissão de carbono

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

- [Descrição do Projeto](#Descrição-do-Projeto)
- [Sobre o Site](#Sobre-o-site)
- [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
- [Tecnologias utilizadas](#Estruturação-e-Ferramentas)
- [Configurando o Ambiente](#Configurando-Ambiente)
- [Contribuidores](#Contribuidores)
- [Acesso ao Projeto](#acesso-ao-projeto)

<h1 align="center"> CBikes 🌎</h1>

A CBikes resume nossa missão: somos uma equipe comprometida e unificada com a missão de contribuir na forma que os ciclistas enxergam o mundo em que vivem. Todos os dias buscamos maneiras de inspirar e informar nossos ciclistas sobre o bem que eles fazem ao meio ambiente através dos pedais. Mas não se trata apenas de informar, trata-se da união e do equilíbrio dos ciclistas e aspirantes em transformar o meio ambiente no melhor lugar para se estar.

---

## Sobre o Site

Cuidar do meio ambiente nunca foi tão fácil!

Você já pensou que a cada pedalada que você dá na sua Bike, milhões de gramas de carbono deixam de ser emitidos na atmosfera?
É focado nisso que a CBikes chegou para revolucionar o uso das bikes e ajudar o nosso planeta.
Aqui você vai poder alugar uma Bike, acessar e salvar suas rotas favoritas, se conectar com pessoas e ter acesso aos resumos do seu desempenho. Além de tudo isso, você poderá descobrir o quanto a sua pedalada ajudou o meio ambiente e ter a chance de participar de premiações incríveis em nossas empresas parceiras.
Venha pedalar com a gente, os seus pedais ajudam a salvar o mundo!

## Funcionalidades e demonstração da Aplicação

### Baixe o aplicativo no seu celular IOS ou Android.

#### _ALUGUEL DE BIKES:_

#### Faça o seu cadastro no app e escolha qual plano se enquadra melhor para você e suas necessidades. Depois de escolher o plano, basta colocar as informações necessárias, achar o posto de parada mais próximo de você e começar a usar sua bike.

_Caso queira pedalar mais do que o período do plano, será cobrada uma taxa de R$5,00 por hora. Para evitar a tarifa é necessário fazer um intervalo de 15 minutos entre cada viagem de até 60 minutos e devolver a bicicleta em um posto de parada._

 ##### Clone este repositório em sua máquina
  
## React.JS

- install 

Para começar o projeto instale no seu terminal

  ```$ npx create-react-app nome-do-documento ```
  
  ```npm install react-router-dom@6 ```
  
  
 


### Estruturação e Ferramentas


- # Configurando Ambiente


## Docker e Conexão com o banco

- Com o Docker Desktop rodando, abra o powershell como administrador e faça o pull da imagem: docker pull mysql
- Rode o comando no terminal do projeto "docker:run"
- Abra o Dbeaver
- Adicione uma conexão com Postegres.
- Na tela Connect to a DataBase, escreva na caixa de Server Host localhost, em DataBase coloque "provi" em user "postgres" e em password coloque a senha "123456".
- Selecione Test Connection, baixe o driver JDBC (caso necessário) e, por fim, o banco de dados está criado

## Possiveis Problemas

- Em alguns casos é necessário habilitar a public key retrival, basta apenas ir no "Driver properties" e mudar a chave "allowPublicKeyRetrieval" de false para TRUE

## Iniciando o projeto

- Abra o projeto com o seu editor de preferencia, abra o terminal e instale as extensões (Eu utilizo o comando "yarn")
- Rode o comando "yarn docker:run" para subir o conteiner docker
- Este projeto está configurado para utilizar o banco de dados padrão do dbeaver, chamado "sys", caso necessário só fazer a troca do banco no .env
- Rode o comando "yarn migration:run" para rodar as migrations
- Rode o comando "yarn seed:run" para inserir o adm e qualquer outra informação que seja necessária e padrão dentro do sistema
- Rode o comando "yarn dev" para startar o servidor

# Decisões de Projeto

## Gitflow

- Optei por utilizar o gitflow, pois trará algumas vantagens na hora de fazer o desenvolvimento, como um maior controle em cada task em que estarei trabalhando e me permitirá corrigir de maneira mais agil e eficiente os bugs que possam vir a aparecer.
- Todo o projeto ficará na branch "main", teremos uma branch de homologação e testes, chamada "hml" e as demais branchs serão as que vou trabalhar em cada task em especifico.

## API's de suporte

Optei por instalar as dependencias que eu mais utilizo em meus projetos

- Optei pelo framework "express"
- O "cors" irá auxiliar a fazer a conversação com o frontend, caso necessário
- O "dotenv" me ajudará a utilizar as variaveis de ambientes
- O "nodemon" irá me auxiliar mantendo o servidor de pé
- Optamos por utilizar o "pg" (postgees), pois é o banco que está instalado em minha máquina, porém, ao decorrer do projeto, irei fazer a troca de banco
- O "knex" irá ajudará a fazer a comunicação com o banco de dados
- Optamos por utilizar o "uuid", pois as id's de usuarios não serão salvas de maneira ordenada
- O "yup" para fazer testes e validações
- O "eslint" para me auxiliar a identificar e gerenciar erros de projeto

## Ferramentas utlizadas

- O editor de código utilizado é o VS Code
- Utilizarei containers docker para poder manter o servidor de banco de dados ativo
- Todos os testes no backend foram feitos com o postman
- Estaremos utilizando o DBeaver para rodar o banco de dados postgrees

## Rotas e suas funções

O projeto conta com X rotas, cada uma possunindo as seguintes caracteristicas

##### Acesso ao Projeto

---

# Contribuidores:

#### - LETÍCIA SOARES

- UX/UI

#### - KARINE LIMA

- PM

#### - DAYANA GUIMARÃES

- UX/UI

### Desenvolvedores
[<img src="https://avatars.githubusercontent.com/u/80355504?v=4" width=115><br><sub>Gabriel Mayan</sub>](https://github.com/Gabriel-Mayan)

[<img src="https://avatars.githubusercontent.com/u/46169735?v=4" width=115><br><sub>João Pedro</sub>](https://github.com/JoaoOliveira0117)

[<img src="https://avatars.githubusercontent.com/u/80927197?v=4" width=115><br><sub>Karine Rebelatto</sub>](https://github.com/karebelatto)
