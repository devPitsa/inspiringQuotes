# InspiringQuotes
for inspiring awesome people!
https://devpitsa.github.io/inspiringQuotes/

## Aplicação Web e Mobile

A aplicação web tem por objetivo mostrar uma citação de uma pessoa influente toda vez que a página for carregada.

A aplicação mobile tem por objetivo tornar possivel o cadastro/login de usuários.
Esses usuários cadastrados poderão adicionar frases e solicitar acesso a API.

## Tecnologias Utilizadas

A aplicação web utiliza faz uma requisição GraphQL para o servidor, o *servidor* **[inspiringQuotes-GraphQLServer](https://github.com/ViniciusmDias/inspiringQuotes-GraphQLServer)**, que no seu lado cliente utiliza a biblioteca **[React](https://pt-br.reactjs.org/)** e, no lado mobile a biblioteca **[ReactNative](https://facebook.github.io/react-native/)** .

## Organização do Código Fonte

O código fonte deste exercício está organizado da seguinte forma:

* **react** : contém a aplicação para web.

* **reactnative** : contém a aplicação para mobile.

## Desenvolvimento da Aplicação

## Clonando a Aplicação

### git clone https://github.com/devPitsa/inspiringQuotes.git

Tanto a aplicação para web quanto para mobile os comandos para desenvolvimento e build são os mesmos.

Após entrar no diretório raiz /**react** executar os comandos abaixo

### npm install

Comando para instalar as bibliotecas JavaScript utilizadas.

### npm start

Coloca no ar em *modo desenvolvimento* a aplicação em https://localhost:3000.

### npm run deploy

Gera uma versão em *modo produção* da aplicação e publica ela na url **[inspiringQuotes-GraphQLServer](https://devpitsa.github.io/inspiringQuotes/)**.
